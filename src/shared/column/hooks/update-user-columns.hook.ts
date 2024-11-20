import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateUserColumnsAction } from "@/shared/column/actions/update-user-columns.action";
import { useTranslations } from "next-intl";
import { toast } from "@/shared/ui/hooks/use-toast";

export function useUpdateUserColumns() {
  const queryClient = useQueryClient();
  const t = useTranslations("index");

  return useMutation({
    mutationFn: UpdateUserColumnsAction,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
      toast({
        title: t("workspace.kanban.update-user-columns-success"),
      });
    },
    onError() {
      toast({
        title: t("workspace.kanban.update-user-columns-fail"),
      });
    },
  });
}
