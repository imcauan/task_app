"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { CreateChatDialog } from "./CreateChatDialog/CreateChatDialog";
import { useGetUsers } from "@/shared/user/hooks/useGetUsers";
import { useUser } from "@/shared/auth/hooks/useUser";
import { ChatbarUserCard } from "./ChatbarUserCard/ChatbarUserCard";
import Link from "next/link";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";

interface ChatbarProps {
  user: UserEntity;
}

export function Chatbar({ user }: ChatbarProps) {
  const [search, setSearch] = React.useState<string>("");
  const { data: users } = useGetUsers();

  const filteredChats =
    search.length > 0
      ? user?.chats?.filter((c) =>
          c.members.find((u) => u.name.includes(search))
        )
      : [];

  return (
    <div className="flex flex-col px-10 min-w-80 h-full border-r gap-3">
      <div className="flex w-full mt-10 items-center justify-between">
        <h1 className=" text-base font-semibold">Chats.</h1>
        <CreateChatDialog users={users ?? []} />
      </div>
      <Input
        className="rounded-none"
        placeholder="Search"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div>
        {search.length > 0
          ? filteredChats?.map((c) => (
              <Link
                href={`chat/${
                  c.members?.find((u) => u.id !== user?.id)?.id
                }?chatId=${c.id}`}
                key={c.id}
              >
                <ChatbarUserCard
                  user={c.members?.find((u) => u.id !== user?.id)!}
                />
              </Link>
            ))
          : user?.chats?.map((c) => (
              <Link
                href={`chat/${
                  c.members?.find((u) => u.id !== user?.id)?.id
                }?chatId=${c.id}`}
                key={c.id}
              >
                <ChatbarUserCard
                  user={c.members?.find((u) => u.id !== user?.id)!}
                />
              </Link>
            ))}
      </div>
    </div>
  );
}
