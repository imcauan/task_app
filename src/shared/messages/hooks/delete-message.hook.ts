import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteMessage() {
  const queryClient = useQueryClient();
  const DeleteMessageRequest = async (id: string) => {
    const { data } = await api.delete(`message/${id}`);

    queryClient.invalidateQueries({ queryKey: ["chat"] });
    return data;
  };

  return useMutation({
    mutationFn: DeleteMessageRequest,
  });
}
