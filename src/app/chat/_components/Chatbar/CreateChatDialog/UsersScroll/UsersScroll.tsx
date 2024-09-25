import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import React from "react";
import { UsersScrollCard } from "./UsersScrollCard/UsersScrollCard";
import Link from "next/link";
import { useCreateChat } from "@/shared/chat/hooks/useCreateChat";

interface UsersScrollProps {
  users: UserEntity[];
  loggedUser: UserEntity | null;
}

export function UsersScroll({ loggedUser, users }: UsersScrollProps) {
  const { mutateAsync: CreateChatFn } = useCreateChat();

  const handleCreateChat = async (receiverId: string) => {
    await CreateChatFn({
      senderId: loggedUser?.id!,
      receiverId,
    });
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap  h-max rounded-none">
      {users.map((u) => (
        <UsersScrollCard
          user={u}
          loggedUser={loggedUser}
          onClick={() => handleCreateChat(u.id)}
        />
      ))}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
