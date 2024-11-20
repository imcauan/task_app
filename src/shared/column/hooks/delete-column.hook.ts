import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteColumnAction } from "@/shared/column/actions/delete-column.action";
import { useTranslations } from "next-intl";
import { toast } from "@/shared/ui/hooks/use-toast";

export function useDeleteColumn() {
  const queryClient = useQueryClient();
  const t = useTranslations("index");

  return useMutation({
    mutationFn: DeleteColumnAction,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
      toast({
        title: t("workspace.kanban.delete-column-success"),
      });
    },
    onError() {
      toast({
        title: t("workspace.kanban.delete-column-fail"),
      });
    },
  });
}
