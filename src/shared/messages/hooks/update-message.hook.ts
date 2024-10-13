import { api } from "@/services/api";
import { MessageEntity } from "@/shared/chat/types/message.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateMessageRequest } from "../types/update-message-request.interface";

export function useUpdateMessage() {
  const queryClient = useQueryClient();
  const UpdateMessageFn = async (data: UpdateMessageRequest) => {
    const { data: message } = await api.patch<MessageEntity>(
      `message/${data.id}`,
      {
        content: data.content,
      }
    );

    queryClient.invalidateQueries({ queryKey: ["selectedChatMessages"] });
    return message;
  };
  return useMutation({
    mutationFn: UpdateMessageFn,
  });
}
