"use client";

import React from "react";
import { io } from "socket.io-client";
import { useParams, useSearchParams } from "next/navigation";

import { useGetUserById } from "@/shared/user/hooks/get-user-by-id.hook";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { useGetMessagesByChatId } from "@/shared/messages/hooks/get-messages-by-chat-id.hook";
import { Chatbar } from "@/components/app/chat/chat-bar";
import { ChatHeader } from "@/components/app/auth/chat-header";
import { MessageInput } from "@/components/app/chat/message-input";
import { MessageList } from "@/components/app/chat/message-list";

const socket = io("http://localhost:3333");

export default function Page() {
  const { id } = useParams();
  const { data: receiverUser } = useGetUserById(id as string);

  const { data: user } = useUser();

  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");
  const { data: messages } = useGetMessagesByChatId(chatId!);

  const [isTyping, setIsTyping] = React.useState<boolean>(false);

  // TODO: handle image for messaging

  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Chatbar user={user!} />
      <div className="w-full h-full flex flex-col justify-between">
        <ChatHeader user={receiverUser!} isTyping={isTyping} />
        <MessageList messages={messages ?? []} loggedUser={user!} />
        <MessageInput
          user={user!}
          chatId={String(chatId)}
          socket={socket}
          setIsTyping={setIsTyping}
        />
      </div>
    </div>
  );
}
