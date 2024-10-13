import { api } from "@/services/api";
import { MessageEntity } from "@/shared/chat/types/message.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetMessagesByChatId(chatId: string) {
  const GetMessagesByChatIdFn = async () => {
    const { data } = await api.get<MessageEntity[]>(`message/chat/${chatId}`);

    return data;
  };

  return useQuery({
    queryKey: ["selectedChatMessages"],
    queryFn: GetMessagesByChatIdFn,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
