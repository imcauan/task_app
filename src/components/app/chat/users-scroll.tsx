import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { UserEntity } from "@/shared/user/types/user.entity";
import React from "react";
import { UsersScrollCard } from "@/components/app/chat/users-scroll-card";
import { useCreateChat } from "@/shared/chat/hooks/create-chat.hook";

interface UsersScrollProps {
  users: UserEntity[];
  loggedUser: UserEntity | null;
}

export function UsersScroll({ loggedUser, users }: UsersScrollProps) {
  const { mutate: CreateChatFn } = useCreateChat();

  const handleCreateChat = (receiverId: string) => {
    CreateChatFn({
      senderId: loggedUser?.id!,
      receiverId,
    });
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap  h-max rounded-none">
      {users.map((u) => (
        <UsersScrollCard
          key={u.id}
          user={u}
          loggedUser={loggedUser}
          onClick={() => handleCreateChat(u.id)}
        />
      ))}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
