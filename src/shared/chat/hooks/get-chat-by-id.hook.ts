import { api } from "@/services/api";
import { ChatEntity } from "../types/chat.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetChatById(id: string) {
  const GetChatByIdFn = async () => {
    const { data } = await api.get<ChatEntity>(`chat/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["chat"],
    queryFn: GetChatByIdFn,
    enabled: !!id,
    refetchInterval: 1000,
  });
}
