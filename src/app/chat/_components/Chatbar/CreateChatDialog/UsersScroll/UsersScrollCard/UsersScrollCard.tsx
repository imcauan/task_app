import { Card } from "@/components/ui/card";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import React from "react";

interface UsersScrollCardProps extends React.ComponentProps<"div"> {
  user: UserEntity;
  loggedUser: UserEntity | null;
}

export function UsersScrollCard({
  user,
  loggedUser,
  ...props
}: UsersScrollCardProps) {
  return (
    <Card
      className="flex w-full gap-4 items-center p-2 rounded-none border-none dark:hover:bg-neutral-900"
      onClick={props.onClick}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/${user.image}`}
        className="object-cover size-10 rounded-full"
      />
      <p className="text-sm font-normal">
        {user.name === loggedUser?.name ? `${user.name} (yourself)` : user.name}
      </p>
    </Card>
  );
}
