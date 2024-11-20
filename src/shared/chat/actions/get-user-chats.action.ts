import { api } from "@/services/api";
import { ChatEntity } from "@/shared/chat/types/chat.entity";

export async function GetUserChatsAction(id: string) {
  try {
    const { data } = await api.get<ChatEntity[]>(`chat/user/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}
