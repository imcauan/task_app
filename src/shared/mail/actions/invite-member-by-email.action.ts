"use server";

import { api } from "@/services/api";
import { InviteMemberRequest } from "@/shared/mail/types/invite-member-request.interface";

export async function InviteMemberByEmailAction(data: InviteMemberRequest) {
  try {
    const { data: response } = await api.post("mail", data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
