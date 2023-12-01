"use client";

import { useAddPostModalStore } from "@/store/useAddPostModalStore";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../icons/home-icon";
import LogoutIcon from "../icons/logout-icon";
import MessagesIcon from "../icons/messages-icon";
import PlusCircleIcon from "../icons/plus-circle-icon";
import UserIcon from "../icons/user-icon";

function BottomNav() {
  const path = usePathname();

  const { openAddPostModal } = useAddPostModalStore();

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
      <Menu>
        <Menu.Button
          className={
            "group flex w-fit items-center gap-2 rounded-md p-2 text-start text-sm"
          }
        >
          <div
            className={`aspect-square h-10 rounded-full bg-slate-700 outline outline-2 outline-offset-2 outline-transparent hover:outline-indigo-600`}
          ></div>
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className={"absolute -top-32"}
        >
          <Menu.Items
            className={
              "-top-full left-0 flex max-h-80 min-w-[10rem] flex-col overflow-hidden overflow-y-auto rounded-lg bg-slate-800 p-2 md:w-fit"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={openAddPostModal}
                  className={`${
                    active && "bg-indigo-600"
                  } flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium transition-all duration-150`}
                >
                  <PlusCircleIcon className="h-5 w-5 fill-white" />
                  <span>Add Post</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={"/profile"}
                  className={`${
                    active && "bg-indigo-600"
                  } flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium transition-all duration-150`}
                >
                  <UserIcon className="h-5 w-5 fill-white" />
                  <span>Profile</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-rose-600 text-white" : "text-rose-600"
                  } flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-semibold transition-all duration-150`}
                >
                  <LogoutIcon className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

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
