import { api } from "@/services/api";
import { MessageEntity } from "@/shared/chat/interfaces/MessageEntity";
import { useQuery } from "@tanstack/react-query";

export function useGetMessageById(id: string) {
  const GetMessageByIdFn = async () => {
    const { data } = await api.get<MessageEntity>(`message/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["message"],
    queryFn: () => GetMessageByIdFn,
  });
}
