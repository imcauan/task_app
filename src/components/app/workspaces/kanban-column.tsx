import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { KanbanTaskCard } from "./kanban-task-card/kanban-task-card";
import { CreateTaskDialog } from "@/components/app/workspaces/create-task-dialog";
import { useDeleteTask } from "@/shared/tasks/hooks/delete-task.hook";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

interface KanbanColumnProps {
  userId: string;
  column: ColumnEntity;
  workspace: WorkspaceEntity;
  tasks: TaskEntity[] | null;
  setTasks: React.Dispatch<React.SetStateAction<TaskEntity[]>>;
  updateColumn: (id: string, title: string) => void;
  deleteColumn: (id: string) => void;
}

export function KanbanColumn({
  userId,
  column,
  tasks,
  workspace,
  setTasks,
  updateColumn,
  deleteColumn,
}: KanbanColumnProps) {
  const [title, setTitle] = React.useState<string>(column.title);
  const [selected, setSelected] = React.useState<TaskPriority>(
    TaskPriority.LOW
  );
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const { mutateAsync: DeleteTaskFn } = useDeleteTask();

  const tasksIds = React.useMemo(() => {
    return tasks?.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column: column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="border rounded-xl border-amber-400 shadow-md min-w-[288px] h-full flex flex-col space-y-4"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-2 rounded-lg min-w-[288px] h-full flex flex-col space-y-4"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h1
            onClick={() => setEditMode(true)}
            className="text-sm cursor-grab p-4"
            {...attributes}
            {...listeners}
          >
            {!editMode && column.title}
            {editMode && (
              <Input
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setEditMode(false)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(false);
                  updateColumn(column.id, title);
                }}
              />
            )}
          </h1>
          <Button
            variant={"ghost"}
            className="hover:bg-transparent"
            onClick={handleDeleteColumn}
          >
            <FaTrash className="size-11 px-4 text-black dark:text-white" />
          </Button>
        </div>
        <Separator />
      </div>
      <div className="p-3 flex flex-col gap-3 w-full h-full overflow-x-hidden overflow-y-auto ">
        {tasksIds && (
          <SortableContext items={tasksIds}>
            {tasks?.map((task) => (
              <KanbanTaskCard
                task={task}
                key={task.id}
                deleteTask={() => handleDeleteTask(task.id)}
              />
            ))}
          </SortableContext>
        )}
      </div>

      <div className="flex flex-col w-full items-center py-2 space-y-2">
        <Separator />
        <CreateTaskDialog
          userId={userId}
          columnId={column.id}
          workspace={workspace}
          setTasks={setTasks}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );

  function handleDeleteColumn() {
    deleteColumn(column.id);
  }

  async function handleDeleteTask(id: string) {
    await DeleteTaskFn(id);

    setTasks((tasks) => tasks && tasks?.filter((task) => task.id !== id));
  }
}
