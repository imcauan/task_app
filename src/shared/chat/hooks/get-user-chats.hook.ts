import { useQuery } from "@tanstack/react-query";
import { GetUserChatsAction } from "@/shared/chat/actions/get-user-chats.action";

export function useGetUserChats(user_id: string) {
  return useQuery({
    queryKey: ["userChats"],
    queryFn: () => GetUserChatsAction(user_id),
    enabled: !!user_id,
  });
}
