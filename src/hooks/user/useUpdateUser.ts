import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateUserRequest {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const UpdateUserFn = async (data: UpdateUserRequest) => {
    const { data: updatedUser } = await api.patch(`users/${data.id}`, data);

    queryClient.invalidateQueries({ queryKey: ["user"] });
    return updatedUser;
  };

  return useMutation({
    mutationFn: UpdateUserFn,
  });
}
