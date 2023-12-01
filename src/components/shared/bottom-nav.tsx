"use client";

import Link from "next/link";
import HomeIcon from "../icons/home-icon";
import MessagesIcon from "../icons/messages-icon";
import { usePathname } from "next/navigation";

function BottomNav() {
  const path = usePathname();

  const excludedPaths = ["/auth"];

  return (
    <nav
      className={`fixed bottom-0 z-40 flex h-16 w-full justify-evenly border-t border-slate-700 bg-slate-950 px-5 py-3 sm:hidden ${
        excludedPaths.some((excludedPath) => path.startsWith(excludedPath))
          ? "hidden"
          : "visible"
      }`}
    >
      <Link
        href={"/"}
        className={`flex items-center gap-2 rounded-md px-4 font-semibold  transition-all duration-150 ${
          path === "/" ? "text-indigo-600" : "text-white"
        }`}
      >
        <HomeIcon className="h-6 w-6" />
      </Link>
      <Link
        href={"/profile"}
        className={`flex items-center gap-2 rounded-md px-4 font-semibold  transition-all duration-150`}
      >
        <div
          className={`aspect-square h-10 rounded-full bg-slate-700 outline outline-2 outline-offset-2 ${
            path.startsWith("/profile")
              ? "outline-indigo-600"
              : "outline-transparent"
          }`}
        />
      </Link>
      <Link
        href={"/chat"}
        className={`flex items-center gap-2 rounded-md px-4 font-semibold  transition-all duration-150 ${
          path.startsWith("/chat") ? "text-indigo-600" : "text-white"
        }`}
      >
        <MessagesIcon className="h-6 w-6" />
      </Link>
    </nav>
  );
}

export default BottomNav;
