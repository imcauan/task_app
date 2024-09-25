"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { Chatbar } from "../_components/Chatbar/Chatbar";
import { useParams, useSearchParams } from "next/navigation";
import { ChatHeader } from "./_components/ChatHeader/ChatHeader";
import { useGetUserById } from "@/shared/user/hooks/useGetUserById";
import { MessageInput } from "../_components/MessageInput/MessageInput";
import { useUser } from "@/shared/auth/hooks/useUser";
import { MessageList } from "../_components/MessageList/MessageList";
import { io } from "socket.io-client";
import React from "react";
import { useGetMessagesByChatId } from "@/shared/messages/hooks/useGetMessagesByChatId";

const socket = io("http://localhost:3333");

export default function Page() {
  const { id } = useParams();
  const { data: receiverUser } = useGetUserById(id as string);

  const { data: user } = useUser();

  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");
  const { data: messages } = useGetMessagesByChatId(chatId!);

  const [isTyping, setIsTyping] = React.useState<boolean>(false);

  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Sidebar />
      <Chatbar user={user!} />
      <div className="w-full h-full flex flex-col justify-between">
        <ChatHeader user={receiverUser!} isTyping={isTyping} />
        <MessageList messages={messages ?? []} loggedUser={user!} />
        <MessageInput
          user={user!}
          chatId={String(chatId)}
          socket={socket}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
        />
      </div>
    </div>
  );
}
