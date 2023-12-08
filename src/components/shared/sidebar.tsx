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
import AddPostModal from "./add-post-modal";
import Logo from "./logo";
import { useAuthStore } from "@/store/useAuthStore";
import { usePersistStore } from "@/hooks/usePersistStore";
import Image from "next/image";
import { useEffect } from "react";
import { getAllLocations } from "@/firebase/location";
import { useLocationStore } from "@/store/useLocationStore";

function Sidebar() {
  const path = usePathname();
  const user = usePersistStore(useAuthStore, (state) => state.user);

  const { openAddPostModal } = useAddPostModalStore();

  const excludedPaths = ["/auth"];

  const { setLocation } = useLocationStore((state) => state);

  useEffect(() => {
    getAllLocations(setLocation);
  }, []);

  return (
    <>
      <AddPostModal />
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
        {user && (
          <Menu>
            <div className={`w-full`}>
              <Menu.Button
                className={
                  "group flex w-full items-center gap-2 rounded-md p-2 text-start text-sm"
                }
              >
                <div className="basis-[20%]">
                  <div className="relative aspect-square overflow-hidden rounded-full bg-slate-700 outline outline-2 outline-offset-2 outline-transparent transition-all duration-150 group-hover:outline-indigo-600">
                    <Image
                      src={user?.photoURL ?? ""}
                      alt="Profile Picture"
                      fill
                    />
                  </div>
                </div>
                <div className="basis-[80%]">
                  <h1 className="line-clamp-1 font-bold">
                    {user?.displayName}
                  </h1>
                  <p className="line-clamp-1 text-xs font-semibold text-slate-500">
                    @{user?.userName}
                  </p>
                </div>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className={" w-full"}
              >
                <Menu.Items
                  className={
                    "absolute -top-[9.5rem] left-0 flex max-h-80 w-full min-w-[10rem] flex-col overflow-hidden overflow-y-auto rounded-lg bg-slate-800 p-2 md:w-fit"
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
                      <button
                        onClick={() => {
                          window.location.href = "/auth/login";
                          localStorage.removeItem("user-data");
                        }}
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
            </div>
          </Menu>
        )}
      </nav>
    </>
  );
}

export default Sidebar;
