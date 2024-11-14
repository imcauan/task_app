import DeleteWorkspaceDialog from "@/components/app/workspaces/settings/delete-workspace-dialog";
import { Container } from "@/components/ui/container.component";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { useTranslations } from "next-intl";
import React from "react";

interface WorkspaceManagementActionsProps {
  workspace: WorkspaceEntity;
}

export default function WorkspaceManagementActions({
  workspace,
}: WorkspaceManagementActionsProps) {
  const { data: user } = useUser();
  const t = useTranslations("index");

  return (
    <Container className="max-w-96 rounded-xl space-y-4">
      {workspace.owner_id === user?.id && (
        <DeleteWorkspaceDialog workspace={workspace} />
      )}
    </Container>
  );
}
