"use client";

import Link from "next/link";
import WorkspaceHomeHeader from "@/app/workspaces/_components/WorkspaceHomeHeader/WorkspaceHomeHeader";
import { WorkspaceCard } from "@/app/workspaces/_components/WorkspaceCard/WorkspaceCard";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { Bottombar } from "@/components/mobile/Bottombar/bottom-bar";

export default function Page() {
  const { data: user } = useUser();

  return (
    <div className="w-full h-full flex dark:bg-black overflow-hidden">
      <Sidebar />
      <div className="flex flex-col  h-screen w-full overflow-y-auto p-4">
        <WorkspaceHomeHeader userId={user?.id} />
        <div className="w-full h-full flex flex-col overflow-auto gap-4 mt-4">
          {user &&
            user.workspaces.map((workspace) => (
              <Link href={`${workspace.id}`} key={workspace.id}>
                <WorkspaceCard workspace={workspace} />
              </Link>
            ))}
        </div>
        <Bottombar />
      </div>
    </div>
  );
}
