"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { UsersScroll } from "./UsersScroll/UsersScroll";
import { useUser } from "@/shared/auth/hooks/useUser";

interface CreateChatDialogProps extends React.ComponentProps<"dialog"> {
  users: UserEntity[];
}

export function CreateChatDialog({ users }: CreateChatDialogProps) {
  const [search, setSearch] = React.useState<string>("");
  const { data: user } = useUser();
  const filteredUsers =
    search.length > 0 ? users.filter((u) => u.name.includes(search)) : [];

  return (
    <Dialog>
      <DialogTrigger className="text-xs flex gap-2">
        <FaPlus />
        New
      </DialogTrigger>
      <DialogContent className="dark:bg-black">
        <DialogHeader>
          <DialogTitle>First of all, search a user.</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Search"
          name="user"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <div>
          <UsersScroll users={filteredUsers} loggedUser={user!} />
        </div>
      </DialogContent>
    </Dialog>
  );
}