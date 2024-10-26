import { MessageEntity } from "@/shared/chat/types/message.entity";
import React from "react";
import { MessageCard } from "../MessageCard/MessageCard";
import { UserEntity } from "@/shared/user/types/user.entity";

interface MessageListProps {
  messages: MessageEntity[];
  loggedUser: UserEntity | null;
}

export function MessageList({ messages, loggedUser }: MessageListProps) {
  return (
    <div className="flex flex-col gap-2 w-full h-full p-2 mt-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.authorId === loggedUser?.id ? "self-end" : "self-start"
          }
        >
          <MessageCard
            message={message}
            loggedUser={loggedUser}
            key={message.id}
          />
        </div>
      ))}
    </div>
  );
}
