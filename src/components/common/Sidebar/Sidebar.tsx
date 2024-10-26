"use client";

import React from "react";
import { Navlink } from "./Navlink";
import { links } from "./links";
import { FaTasks } from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col min-w-72 border left-0 sticky top-0 justify-start gap-12 items-center overflow-hidden h-screen p-10">
      <div className="flex w-full gap-2 text-xl items-center px-2">
        <FaTasks />
        <p className="font-semibold">TaskApp</p>
      </div>
      {links.map((link) => (
        <Navlink key={link.text} link={link} href={link.href} />
      ))}
    </div>
  );
}
