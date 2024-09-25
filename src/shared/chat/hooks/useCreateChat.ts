import { api } from "@/services/api";
import { ChatEntity } from "../interfaces/ChatEntity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateChatRequest {
  receiverId: string;
  senderId: string;
}

export function useCreateChat() {
  const queryClient = useQueryClient();
  const CreateChatFn = async (data: CreateChatRequest) => {
    const { data: chat } = await api.post<ChatEntity>("chat", data);

    queryClient.invalidateQueries({ queryKey: ["userChats"] });

    return chat;
  };

  return useMutation({
    mutationFn: CreateChatFn,
  });
}
