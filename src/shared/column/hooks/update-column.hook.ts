import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateColumnAction } from "@/shared/column/actions/update-column.action";
import { toast } from "@/shared/ui/hooks/use-toast";
import { useTranslations } from "next-intl";

export function useUpdateColumn() {
  const queryClient = useQueryClient();
  const t = useTranslations("index");

  return useMutation({
    mutationFn: UpdateColumnAction,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
      toast({
        title: t("workspace.kanban.update-column-success"),
      });
    },
    onError() {
      toast({
        title: t("workspace.kanban.update-column-fail"),
      });
    },
  });
}
