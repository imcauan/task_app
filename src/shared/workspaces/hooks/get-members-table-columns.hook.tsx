import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Container } from "@/components/ui/container.component";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { useDeleteUserFromWorkspace } from "@/shared/workspaces/hooks/delete-user-from-workspace.hook";
import { MemberTable } from "@/shared/workspaces/types/members-table.type";
import { ColumnDef } from "@tanstack/react-table";
import { FaTrash } from "react-icons/fa";

export function useGetMembersTableColumns() {
  const { data: user } = useUser();
  const { mutate: deleteUserFromWorkspaceFn } = useDeleteUserFromWorkspace();
  const columns: ColumnDef<MemberTable>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => row.getValue("name"),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => row.getValue("email"),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const { email, workspaceId } = row.original;

        return (
          <Container className="flex gap-3 items-center">
            <AlertDialog>
              <AlertDialogTrigger
                disabled={email !== user?.email || true}
                asChild
              >
                <FaTrash />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>
                  Are you sure you want to delete this user from workspace?
                </AlertDialogTitle>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      deleteUserFromWorkspaceFn({
                        userEmail: email,
                        workspaceId,
                      })
                    }
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Container>
        );
      },
    },
  ];

  return columns;
}
