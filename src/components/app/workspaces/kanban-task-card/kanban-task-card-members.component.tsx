import AvatarCircles from "@/components/ui/avatar-circles";
import { Container } from "@/components/ui/container.component";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { useTranslations } from "next-intl";

interface KanbanTaskCardMembersProps {
  task: TaskEntity;
}

export function KanbanTaskCardMembers({ task }: KanbanTaskCardMembersProps) {
  const avatarUrls = task.members?.map((member) => member.image) || [];
  const t = useTranslations("index");

  return (
    <Container className="flex gap-3 items-center">
      <h1 className="text-base">
        {t("workspace.kanban.create-task-form.members")}
      </h1>
      <AvatarCircles avatarUrls={avatarUrls} />
    </Container>
  );
}
