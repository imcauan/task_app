import { toast } from "@/shared/ui/hooks/use-toast";
import { InviteMemberByEmailAction } from "@/shared/mail/actions/invite-member-by-email.action";
import { useMutation } from "@tanstack/react-query";

export function useInviteMemberByEmail() {
  return useMutation({
    mutationFn: InviteMemberByEmailAction,
    onSuccess: () => {
      toast({
        title: "Invite sent successfully",
        className: "bg-green-600",
      });
    },
  });
}
