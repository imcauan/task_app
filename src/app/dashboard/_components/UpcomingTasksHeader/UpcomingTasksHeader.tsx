import Link from "next/link";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

export function UpcomingTasksHeader() {
  return (
    <div className="flex items-center gap-4 px-4">
      <h1 className="">Upcoming tasks.</h1>
      <Link
        href="/tasks"
        className="flex items-center text-sm border p-1 bg-black text-white rounded"
      >
        <p>View all</p>
        <MdNavigateNext className="text-lg hover:border-b border-b-black" />
      </Link>
    </div>
  );
}
