"use client";

import { FormInput } from "@/components/common/FormInput";
import { Form } from "@/components/ui/form";
import { UserEntity } from "@/shared/user/types/user.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Socket } from "socket.io-client";
import { z } from "zod";

const formSchema = z.object({
  content: z.string(),
});

interface MessageInputProps {
  chatId: string;
  user: UserEntity;
  socket: Socket;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MessageInput({
  chatId,
  user,
  socket,
  setIsTyping,
}: MessageInputProps) {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async ({ content }: z.infer<typeof formSchema>) => {
    socket
      .emit("newMessage", {
        content,
        authorId: user?.id!,
        chatId,
      })
      .on("onMessage", async (_data: any) => {
        queryClient.invalidateQueries({
          queryKey: ["selectedChatMessages"],
        });

        form.reset();
      });
  };

  const handleIsTyping = () => {
    socket.emit("typing", {
      isTyping: true,
      id: user?.id!,
    });

    socket.on("onTyping", (data: any) => {
      if (data.id !== user?.id!) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }
    });
  };

  return (
    <div className="w-full p-4 flex items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-2">
          <FormInput
            form={form}
            name="content"
            placeholder="Type your message"
            className="rounded-none"
            onFocus={handleIsTyping}
          />
        </form>
      </Form>
    </div>
  );
}
