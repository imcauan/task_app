"use client";
import React from "react";
import { KanbanColumn } from "@/components/app/workspaces/kanban-column";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { useUpdateColumn } from "@/shared/column/hooks/update-column.hook";
import { useDeleteColumn } from "@/shared/column/hooks/delete-column.hook";
import { useCreateColumn } from "@/shared/column/hooks/create-column.hook";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { KanbanTaskCard } from "@/components/app/workspaces/kanban-task-card/kanban-task-card";
import { useDeleteTask } from "@/shared/tasks/hooks/delete-task.hook";
import { useUpdateUserColumns } from "@/shared/column/hooks/update-user-columns.hook";

import { useTranslations } from "next-intl";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { useUpdateColumnTasks } from "@/shared/workspaces/hooks/update-column-tasks.hook";
interface KanbanBoardProps {
  workspace: WorkspaceEntity;
  userId: string;
}

export function KanbanBoard({ userId, workspace }: KanbanBoardProps) {
  const t = useTranslations("index");

  const { mutateAsync: createColumnFn } = useCreateColumn();
  const { mutateAsync: deleteColumnFn } = useDeleteColumn();
  const { mutateAsync: updateColumnFn } = useUpdateColumn();
  const { mutate: updateColumnTasksFn } = useUpdateColumnTasks();
  const { mutate: updateUserColumnFn } = useUpdateUserColumns();
  const { mutate: deleteTaskFn } = useDeleteTask();

  const [columns, setColumns] = React.useState<ColumnEntity[]>(
    workspace?.columns!
  );

  const [tasks, setTasks] = React.useState<TaskEntity[]>(workspace?.tasks!);

  const [activeTask, setActiveTask] = React.useState<TaskEntity | null>(null);
  const [activeColumn, setActiveColumn] = React.useState<ColumnEntity | null>(
    null
  );

  const columnsId = React.useMemo(
    () => columns?.map((col) => col.id),
    [columns]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
        delay: 2000,
      },
    })
  );

  return (
    <div className="flex w-full gap-4 overflow-x-visible overflow-y- p-4">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div>
          <div className="flex gap-10 items-center h-full overflow-x-auto">
            <SortableContext items={columnsId as string[]}>
              {columns ? (
                columns.map((t) => (
                  <KanbanColumn
                    userId={userId}
                    workspace={workspace}
                    column={t}
                    key={t.id}
                    setTasks={setTasks}
                    tasks={tasks?.filter((task) => task.column_id === t.id)}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                  />
                ))
              ) : (
                <h1>No columns.</h1>
              )}
            </SortableContext>
            {createPortal(
              <DragOverlay>
                {activeColumn && (
                  <KanbanColumn
                    userId={userId}
                    workspace={workspace}
                    setTasks={setTasks}
                    column={activeColumn}
                    tasks={
                      tasks?.filter(
                        (task) => task.column_id === activeColumn.id
                      ) || []
                    }
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                  />
                )}
                {activeTask && (
                  <KanbanTaskCard task={activeTask} deleteTask={deleteTaskFn} />
                )}
              </DragOverlay>,
              document.body
            )}
          </div>
        </div>
      </DndContext>
      <Button
        className="flex dark:text-white max-w-60 items-center gap-3 bg-gradient-to-r from-amber-400 to-indigo-600"
        onClick={addColumn}
      >
        <FaPlus />
        {t("workspace.kanban.create-column")}
      </Button>
    </div>
  );

  async function addColumn() {
    const column = await createColumnFn({
      userId,
      workspaceId: workspace.id,
    });

    setColumns((prev) => [...prev!, column as ColumnEntity]);
  }

  async function deleteColumn(id: string) {
    await deleteColumnFn(id);

    setColumns((prev) => prev!?.filter((p) => p.id !== id));
  }

  async function updateColumn(id: string, title: string) {
    const updatedColumn = await updateColumnFn({ id, title });

    const updatedColumns = columns?.map((col) => {
      if (col.id !== updatedColumn?.id) return col;
      return { ...col, title };
    });

    setColumns(updatedColumns!);
  }

  function onDragStart(ev: DragStartEvent) {
    if (ev.active.data.current?.type === "Column") {
      setActiveColumn(ev.active.data.current?.column as ColumnEntity);
      return;
    }

    if (ev.active.data.current?.type === "Task") {
      setActiveTask(ev.active.data.current?.task as TaskEntity);
      return;
    }
  }

  function onDragEnd(ev: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = ev;

    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;
    const activeColumnIndex = columns?.findIndex(
      (c) => c.id === activeColumnId
    );
    const overColumnIndex = columns?.findIndex((c) => c.id === overColumnId);

    const updatedColumns = arrayMove(
      columns as ColumnEntity[],
      activeColumnIndex as number,
      overColumnIndex as number
    ) as ColumnEntity[];

    setColumns(updatedColumns);

    const columnsToUpdate = updatedColumns?.map((col, index) => ({
      id: col.id,
      order: index,
    }));

    updateUserColumnFn({ id: workspace.id, columns: columnsToUpdate! });
  }

  function onDragOver(ev: DragOverEvent) {
    const { active, over } = ev;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const existsActiveTask = active.data.current?.type === "Task";
    const existsOverTask = over.data.current?.type === "Task";

    if (!existsActiveTask) return;

    // Dropping a task over another task
    if (existsActiveTask && existsOverTask) {
      const activeIndex = tasks?.findIndex((t) => t.id === activeId);
      const overIndex = tasks?.findIndex((t) => t.id === overId);
      const updatedTasks = arrayMove(
        tasks!,
        activeIndex as number,
        overIndex as number
      );

      setTasks(updatedTasks);

      updateColumnTasksFn({
        id: workspace.id,
        tasks: updatedTasks.map((task, index) => ({
          id: task.id,
          name: task.name,
          order: index,
          columnId: task.column_id,
        })),
      });
    }

    // Dropping a task over a column
    const existsOverColumn = over.data.current?.type === "Column";

    if (existsActiveTask && existsOverColumn) {
      const activeIndex = tasks?.findIndex((t) => t.id === activeId);

      const updatedTasks = arrayMove(
        tasks!,
        activeIndex as number,
        activeIndex as number
      ) as TaskEntity[];

      updatedTasks[activeIndex].column_id = overId as string;

      setTasks(updatedTasks);

      updateColumnTasksFn({
        id: workspace.id,
        tasks: updatedTasks.map((task, index) => ({
          id: task.id,
          name: task.name,
          order: index,
          columnId: task.column_id,
        })),
      });
    }
  }
}
