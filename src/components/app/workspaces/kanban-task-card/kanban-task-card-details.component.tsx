import { KanbanTaskCardMembers } from "@/components/app/workspaces/kanban-task-card/kanban-task-card-members.component";
import { KanbanTaskCardPriority } from "@/components/app/workspaces/kanban-task-card/kanban-task-card-priority.component";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { useTranslations } from "next-intl";
import { BsThreeDotsVertical } from "react-icons/bs";

interface KanbanTaskCardDetailsProps {
  task: TaskEntity;
  onDelete: () => void;
}

export function KanbanTaskCardDetails({
  task,
  onDelete,
}: KanbanTaskCardDetailsProps) {
  const t = useTranslations("index");
  return (
    <Dialog>
      <DialogTrigger>
        <BsThreeDotsVertical />
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-900">
        <DialogTitle>{task.name}</DialogTitle>
        <p>{task.description}</p>
        <KanbanTaskCardPriority priority={task.priority} />
        {task?.members?.length! > 1 && <KanbanTaskCardMembers task={task} />}
        <DialogFooter>
          <DialogClose
            onClick={onDelete}
            className="p-2 text-white rounded-xl font-semibold text-sm"
          >
            {t("workspace.kanban.task-details.delete")}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
