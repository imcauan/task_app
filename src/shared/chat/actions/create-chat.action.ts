"use server";

import { api } from "@/services/api";
import { ChatEntity } from "@/shared/chat/types/chat.entity";
import { CreateChatRequest } from "@/shared/chat/types/create-chat-request.interface";

export async function CreateChatAction(data: CreateChatRequest) {
  try {
    const { data: chat } = await api.post<ChatEntity>("chat", data);
    return chat;
  } catch (error) {
    console.log(error);
  }
}
