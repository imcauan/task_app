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
import { useUpdateColumnTasks } from "@/shared/column/hooks/update-column-tasks.hook";
import { useTranslations } from "next-intl";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

// TODO: add task atributions
interface KanbanBoardProps {
  columns: ColumnEntity[] | undefined;
  tasks: TaskEntity[] | undefined;
  setTasks: React.Dispatch<React.SetStateAction<TaskEntity[]>>;
  workspace: WorkspaceEntity;
  userId: string;
}

export function KanbanBoard({
  columns,
  userId,
  tasks,
  setTasks,
  workspace,
}: KanbanBoardProps) {
  const [cols, setCols] = React.useState<ColumnEntity[] | null>(columns!);
  const t = useTranslations("index");

  const [activeTask, setActiveTask] = React.useState<TaskEntity | null>(null);
  const [activeColumn, setActiveColumn] = React.useState<ColumnEntity | null>(
    null
  );

  // TODO: fix tasks column update

  const { mutateAsync: createColumnFn } = useCreateColumn();
  const { mutateAsync: deleteColumnFn } = useDeleteColumn();
  const { mutateAsync: updateColumnFn } = useUpdateColumn();
  const { mutate: updateColumnTasksFn } = useUpdateColumnTasks();
  const { mutate: updateUserColumnFn } = useUpdateUserColumns();
  const { mutate: deleteTaskFn } = useDeleteTask();

  const columnsId = React.useMemo(
    () => columns?.map((col) => col.id),
    [columns]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
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
          <div className="flex gap-4 items-center h-full overflow-x-auto">
            <SortableContext items={columnsId as string[]}>
              {cols ? (
                cols.map((t) => (
                  <KanbanColumn
                    userId={userId}
                    workspace={workspace}
                    column={t}
                    key={t.id}
                    setTasks={setTasks}
                    tasks={
                      tasks?.filter(
                        (task) => task.column_id === t.id
                      ) as TaskEntity[]
                    }
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

    setCols((prev) => [...prev!, column]);
  }

  async function deleteColumn(id: string) {
    await deleteColumnFn(id);

    setCols((prev) => prev!?.filter((p) => p.id !== id));
  }

  async function updateColumn(id: string, title: string) {
    const { id: updatedColumnId } = await updateColumnFn({ id, title });

    const updatedColumns = cols?.map((col) => {
      if (col.id !== updatedColumnId) return col;
      return { ...col, title };
    });

    setCols(updatedColumns!);
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
      cols as ColumnEntity[],
      activeColumnIndex as number,
      overColumnIndex as number
    );

    setCols(updatedColumns);

    const columnsToUpdate = updatedColumns?.map((col, index) => ({
      id: col.id,
      order: index,
    }));

    updateUserColumnFn({ id: workspace.id, columns: columnsToUpdate! });
  }

  function onDragOver(ev: DragOverEvent) {
    const { active, over } = ev;
    if (!over) return;

    const columnId = active?.data.current?.task?.column_id;

    const columnToUpdate = columns?.find((c) => c.id === columnId)!;
    const { id, tasks } = columnToUpdate ?? [];

    const activeId = active.id;
    const overId = over.id;

    const existsActiveTask = active.data.current?.type === "Task";
    const existsOverTask = over.data.current?.type === "Task";

    const activeTaskIndex = tasks?.findIndex((t) => t.id === activeId);
    const overTaskIndex = tasks?.findIndex((t) => t.id === overId);

    if (existsActiveTask && existsOverTask) {
      const updatedTasks = arrayMove(
        tasks as TaskEntity[],
        activeTaskIndex as number,
        overTaskIndex as number
      );

      const tasksToUpdate = updatedTasks.map((t, index) => ({
        id: t.id,
        order: index,
      }));

      updateColumnTasksFn({
        id,
        tasks: tasksToUpdate,
      });

      setTasks((tasks) => {
        tasks![activeTaskIndex as number].column_id =
          tasks![overTaskIndex as number].column_id;

        return updatedTasks;
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    console.log(`overId => ${overId}`);
    console.log(`isOverAColumn => ${isOverAColumn}`);

    // --------------------------------------------------
    if (existsActiveTask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks![activeIndex].column_id = overId as string;

        const updatedTasks = arrayMove(tasks, activeTaskIndex, activeTaskIndex);

        updateColumnTasksFn({
          id,
          tasks: updatedTasks.map((t, index) => ({
            id: t.id,
            order: index,
            columnId: t.column_id,
          })),
        });

        return updatedTasks;
      });
    }
  }
}
