"use client";

import Link from "next/link";
import Logo from "./logo";
import HomeIcon from "../icons/home-icon";
import { usePathname } from "next/navigation";
import MessagesIcon from "../icons/messages-icon";
import UserIcon from "../icons/user-icon";

function Sidebar() {
  const path = usePathname();

  const excludedPaths = ["/auth"];

  return (
    <nav
      className={`sticky top-0 flex h-screen basis-[30%] flex-col items-center justify-between p-5 ${
        !excludedPaths.includes(path) ? "hidden" : "visible"
      }`}
    >
      <div className="flex w-full flex-col items-center gap-10">
        <Link href={"/"}>
          <Logo />
        </Link>

        <ul className="flex w-full flex-col gap-2">
          <li>
            <Link
              href={"/"}
              className={`flex w-full items-center gap-2 rounded-md p-2 font-semibold  transition-all duration-150  ${
                path === "/"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-500 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/chats"}
              className={`flex w-full items-center gap-2 rounded-md p-2 font-semibold  transition-all duration-150  ${
                path.includes("/chats")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-500 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <MessagesIcon className="h-5 w-5" />
              <span>Chats</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/profile"}
              className={`flex w-full items-center gap-2 rounded-md p-2 font-semibold  transition-all duration-150  ${
                path.includes("/profile")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-500 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
