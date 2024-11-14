import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TfiEmail } from "react-icons/tfi";
import { InviteMemberForm } from "@/components/app/workspaces/invite-member-form";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

interface AddMemberDialogProps extends React.ComponentProps<"dialog"> {
  name: string;
  workspace: WorkspaceEntity;
}

export function AddMemberDialog({ name, workspace }: AddMemberDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className=" text-black dark:text-white flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2">
        <TfiEmail />
        Invite
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-900">
        <DialogTitle>Invite members.</DialogTitle>
        <InviteMemberForm name={name} workspace={workspace} />
      </DialogContent>
    </Dialog>
  );
}
