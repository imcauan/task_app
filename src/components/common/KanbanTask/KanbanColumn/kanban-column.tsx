import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { KanbanTaskCard } from "../KanbanTaskCard/kanban-task-card";
import { CreateTaskDialog } from "@/components/common/CreateTaskDialog/CreateTaskDialog";
import { useDeleteTask } from "@/shared/tasks/hooks/delete-task.hook";
import { TaskEntity } from "@/shared/tasks/types/task.entity";

interface KanbanColumnProps {
  userId: string;
  column: ColumnEntity;
  tasks: TaskEntity[] | null;
  setTasks: React.Dispatch<React.SetStateAction<TaskEntity[]>>;
  updateColumn: (id: string, title: string) => void;
  deleteColumn: (id: string) => void;
}

export function KanbanColumn({
  userId,
  column,
  tasks,
  setTasks,
  updateColumn,
  deleteColumn,
}: KanbanColumnProps) {
  const [title, setTitle] = React.useState<string>(column.title);
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
        className="border border-blue-600 shadow-md min-w-[288px] h-full flex flex-col space-y-4"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-2 rounded min-w-[288px] h-full flex flex-col space-y-4"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h1
            onClick={() => setEditMode(true)}
            className="text-base font-semibold cursor-grab p-4"
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
      <div className="p-3 flex flex-col gap-10 w-full h-full overflow-x-hidden overflow-y-auto ">
        {tasksIds ? (
          <SortableContext items={tasksIds}>
            {tasks?.map((task) => (
              <KanbanTaskCard
                task={task}
                key={task.id}
                deleteTask={() => handleDeleteTask(task.id)}
              />
            ))}
          </SortableContext>
        ) : (
          <div>No tasks yet.</div>
        )}
      </div>

      <div className="flex flex-col w-full items-center py-2 space-y-2">
        <Separator />
        <CreateTaskDialog
          userId={userId}
          columnId={column.id}
          setTasks={setTasks}
        />
      </div>
    </div>
  );

  function handleDeleteColumn() {
    console.log(`column id => ${column.id}`);
    deleteColumn(column.id);
  }

  async function handleDeleteTask(id: string) {
    await DeleteTaskFn(id);

    setTasks((tasks) => tasks && tasks?.filter((task) => task.id !== id));
  }
}
