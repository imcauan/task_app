import { api } from "@/services/api";
import { ChatEntity } from "../types/chat.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetChats() {
  const GetChatsFn = async () => {
    const { data } = await api.get<ChatEntity[]>("chat");

    return data;
  };

  return useQuery({
    queryKey: ["chats"],
    queryFn: GetChatsFn,
  });
}
