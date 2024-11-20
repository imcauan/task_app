"use client";

import Link from "next/link";
import WorkspaceHomeHeader from "@/components/app/workspaces/workspace-home-header";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { WorkspaceCard } from "@/components/app/workspaces/workspace-card/workspace-card.component";
import { Container } from "@/components/ui/container.component";

export default function Page() {
  const { data: user } = useUser();

  return (
    <Container className="w-full h-full flex mt-6 overflow-hidden">
      <Container className="flex flex-col w-full p-4 space-y-4">
        <WorkspaceHomeHeader userId={user?.id} />
        <Container className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {user &&
            user.workspaces.map((workspace) => (
              <Link
                href={`workspaces/workspace?id=${workspace.id}`}
                key={workspace.id}
              >
                <WorkspaceCard workspace={workspace} />
              </Link>
            ))}
        </Container>
      </Container>
    </Container>
  );
}
