import { api } from "@/services/api";
import { InviteMemberRequest } from "@/shared/mail/types/invite-member-request.interface";

export function useInviteMemberByEmail() {
  const InviteMemberByEmailFn = async (data: InviteMemberRequest) => {
    const { data: response } = await api.post("mail", data);

    return response;
  };

  return { InviteMemberByEmailFn };
}
