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
      className={`sticky top-0 h-screen basis-[30%] flex-col items-center justify-between p-5 ${
        excludedPaths.some((excludedPath) => path.startsWith(excludedPath))
          ? "hidden"
          : "visible hidden sm:flex"
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
              href={"/chat"}
              className={`flex w-full items-center gap-2 rounded-md p-2 font-semibold  transition-all duration-150  ${
                path.startsWith("/chat")
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
                path.startsWith("/profile")
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
      <button className="flex w-full items-center gap-2 rounded-md p-2 text-start text-sm hover:bg-slate-800">
        <div className="basis-[20%]">
          <div className="aspect-square rounded-full bg-slate-700"></div>
        </div>
        <div className="basis-[80%]">
          <h1 className="font-bold">Donald Truck</h1>
          <p className="font-semibold text-slate-500">@donaltruk2231</p>
        </div>
      </button>
    </nav>
  );
}

export default Sidebar;
