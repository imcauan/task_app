import { api } from "@/services/api";
import { ChatEntity } from "../types/chat.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteChat() {
  const queryClient = useQueryClient();
  const DeleteChatFn = async (id: string) => {
    const { data } = await api.delete<ChatEntity>(`chat/${id}`);

    queryClient.invalidateQueries({ queryKey: ["userChats"] });
    return data;
  };

  return useMutation({
    mutationFn: DeleteChatFn,
  });
}
