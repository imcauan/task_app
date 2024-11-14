import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import React from "react";
import { useTranslations } from "next-intl";
import { useDeleteWorkspace } from "@/shared/workspaces/hooks/delete-workspace.hook";

interface DeleteWorkspaceDialogProps {
  workspace: WorkspaceEntity;
}

export default function DeleteWorkspaceDialog({
  workspace,
}: DeleteWorkspaceDialogProps) {
  const t = useTranslations("index");
  const { mutate: DeleteWorkspaceFn } = useDeleteWorkspace();

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonVariants({ variant: "destructive" })}
      >
        {t("workspace.settings.delete-workspace")}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          {t("workspace.settings.delete-workspace-dialog.title", {
            name: workspace.name,
          })}
        </AlertDialogTitle>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("button-actions.cancel")}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-gradient-to-r from-amber-400 to-indigo-600 text-white"
            onClick={() => DeleteWorkspaceFn(workspace.id)}
          >
            {t("button-actions.confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
