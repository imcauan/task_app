"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { CreateChatDialog } from "@/components/app/chat/create-chat-dialog";
import { ChatbarUserCard } from "@/components/app/chat/chat-bar-user-card";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Container } from "@/components/ui/container.component";
import { useLocale } from "next-intl";
import { useGetUsers } from "@/shared/user/hooks/get-users.hook";
import { useGetUserChats } from "@/shared/chat/hooks/get-user-chats.hook";
import { useUser } from "@/shared/auth/hooks/user.hook";

export function Chatbar() {
  const { data: user } = useUser();
  const [search, setSearch] = React.useState<string>("");
  const { data: users } = useGetUsers();
  const { data: chats } = useGetUserChats(user?.id!);
  const locale = useLocale();

  const filteredChats =
    search.length > 0
      ? chats?.filter((c) => c.members.find((u) => u.name.includes(search)))
      : [];

  return (
    <Container className="hidden md:flex flex-col px-10 w-full md:max-w-80 h-full border-r gap-3 dark:bg-neutral-900">
      <Container className="flex w-full mt-10 items-center justify-between">
        <Container className="flex gap-2 items-center">
          <Link
            href={`/${locale}/workspaces`}
            className="bg-gradient-to-r from-amber-400 to-indigo-600 p-2 text-white rounded-xl flex lg:hidden"
          >
            <FaHome />
          </Link>
          <h1 className=" text-base font-semibold">Chats.</h1>
        </Container>
        <CreateChatDialog users={users ?? []} />
      </Container>
      <Input
        className="rounded-none"
        placeholder="Search"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Container>
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
          : chats?.map((c) => (
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
      </Container>
    </Container>
  );
}
