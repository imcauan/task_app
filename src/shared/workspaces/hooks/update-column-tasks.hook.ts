import { toast } from "@/shared/ui/hooks/use-toast";
import { UpdateColumnTasksAction } from "@/shared/workspaces/actions/update-column-tasks.action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export function useUpdateColumnTasks() {
  const t = useTranslations("index");

  return useMutation({
    mutationFn: UpdateColumnTasksAction,
    onSuccess() {
      toast({
        title: t("workspace.kanban.update-column-tasks-success"),
      });
    },
    onError() {
      toast({
        title: t("workspace.kanban.update-column-tasks-fail"),
      });
    },
  });
}
