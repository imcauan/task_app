import { IoMdSettings } from "react-icons/io";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import React from "react";
import Link from "next/link";

interface WorkspaceHeaderProps extends React.ComponentProps<"header"> {
  workspace: WorkspaceEntity;
}

export function WorkspaceHeader({ workspace, ...props }: WorkspaceHeaderProps) {
  return (
    <header {...props} className="w-full flex flex-col max-h-20">
      <div className="w-full mt-10 px-6 flex gap-4 items-center">
        <h1 className="font-semibold text-xl">{workspace.name}</h1>
        <div className="flex gap-3 items-center text-center">
          <Link
            href={`settings?workspace=${workspace.id}`}
            className="text-2xl"
          >
            <IoMdSettings />
          </Link>
        </div>
      </div>
    </header>
  );
}
