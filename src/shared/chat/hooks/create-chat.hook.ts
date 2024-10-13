import { api } from "@/services/api";
import { ChatEntity } from "@/shared/chat/types/chat.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateChatRequest } from "@/shared/chat/types/create-chat-request.interface";

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
