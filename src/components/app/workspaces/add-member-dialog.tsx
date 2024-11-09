import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TfiEmail } from "react-icons/tfi";
import { InviteMemberForm } from "@/components/app/workspaces/invite-member-form";

interface AddMemberDialogProps extends React.ComponentProps<"dialog"> {
  name: string;
  workspaceName: string;
}

export function AddMemberDialog({ name, workspaceName }: AddMemberDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className=" text-black dark:text-white flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2">
        <TfiEmail />
        Invite
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-900">
        <DialogTitle>Invite members.</DialogTitle>
        <InviteMemberForm name={name} workspaceName={workspaceName} />
      </DialogContent>
    </Dialog>
  );
}
