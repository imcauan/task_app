import { api } from "@/services/api";
import { ChatEntity } from "@/shared/chat/types/chat.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateChatRequest } from "@/shared/chat/types/create-chat-request.interface";
import { CreateChatAction } from "@/shared/chat/actions/create-chat.action";
import { toast } from "@/shared/ui/hooks/use-toast";

export function useCreateChat() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: CreateChatAction,
    onSuccess: () => {
      toast({
        title: "✅ Chat created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong while creating chat",
      });
    },
  });
}
