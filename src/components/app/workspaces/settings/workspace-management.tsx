import { AddMemberDialog } from "@/components/app/workspaces/add-member-dialog";
import WorkspaceManagementActions from "@/components/app/workspaces/settings/workspace-management-actions";
import { WorkspaceMembersTable } from "@/components/app/workspaces/settings/workspace-members-table";
import { Container } from "@/components/ui/container.component";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { useGetMembersTableColumns } from "@/shared/workspaces/hooks/get-members-table-columns.hook";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import React from "react";

interface WorkspaceManagementProps {
  workspace: WorkspaceEntity;
}

export function WorkspaceManagement({ workspace }: WorkspaceManagementProps) {
  const columns = useGetMembersTableColumns();
  const { data: user } = useUser();

  const data = Array.from(
    workspace.members.map((member) => ({
      name: member.name,
      email: member.email,
      workspaceId: workspace.id,
    }))
  );

  return (
    <Container className="flex flex-col gap-3 w-full justify-center">
      <Container className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">Workspace members</h1>
        <AddMemberDialog name={user?.name as string} workspace={workspace} />
      </Container>
      <Container className="max-w-6xl space-y-4">
        <WorkspaceMembersTable data={data} columns={columns} />
      </Container>
      <WorkspaceManagementActions workspace={workspace} />
    </Container>
  );
}
