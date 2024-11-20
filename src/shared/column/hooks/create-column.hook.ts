import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateColumnAction } from "@/shared/column/actions/create-column.action";
import { toast } from "@/shared/ui/hooks/use-toast";
import { useTranslations } from "next-intl";

export function useCreateColumn() {
  const queryClient = useQueryClient();
  const t = useTranslations("index");

  return useMutation({
    mutationFn: CreateColumnAction,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
      toast({
        title: t("workspace.kanban.create-column-success"),
      });
    },
    onError() {
      toast({
        title: t("workspace.kanban.create-column-fail"),
      });
    },
  });
}
