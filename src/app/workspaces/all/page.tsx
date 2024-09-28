"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { useUser } from "@/shared/auth/hooks/useUser";
import WorkspaceHomeHeader from "@/app/workspaces/_components/WorkspaceHomeHeader/WorkspaceHomeHeader";
import { WorkspaceCard } from "@/app/workspaces/_components/WorkspaceCard/WorkspaceCard";
import Link from "next/link";

export default function Page() {
  const { data: user } = useUser();

  return (
    <div className="dark:bg-black w-full h-dvh lg:h-screen flex items-start">
      <Sidebar />
      <div className="p-4 my-6 flex flex-col gap-2">
        <WorkspaceHomeHeader userId={user?.id} />
        <div className="w-full grid grid-cols-3 gap-4">
          {user &&
            user.workspaces.map((workspace) => (
              <Link href={`${workspace.id}`} key={workspace.id}>
                <WorkspaceCard workspace={workspace} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
