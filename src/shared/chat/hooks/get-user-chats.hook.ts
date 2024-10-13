import { api } from "@/services/api";
import { ChatEntity } from "../types/chat.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserChats(user_id: string) {
  const GetUserChatsFn = async () => {
    const { data } = await api.get<ChatEntity[]>(`chat/user/${user_id}`);

    return data;
  };

  return useQuery({
    queryKey: ["userChats"],
    queryFn: GetUserChatsFn,
  });
}
