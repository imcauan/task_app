import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TfiEmail } from "react-icons/tfi";

export function AddMemberDialog() {
  return (
    <Dialog>
      <DialogTrigger className=" text-black dark:text-white flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2">
        <TfiEmail />
        Invite
      </DialogTrigger>
      <DialogContent className="dark:bg-black">
        <DialogTitle>Invite members.</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
