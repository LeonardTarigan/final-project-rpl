"use client";

import { IModal } from "@/utils/types.ts";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import XIcon from "../icons/x-icon";
import { usePersistStore } from "@/hooks/usePersistStore";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { changeUserProfile } from "@/firebase/profile";

function EditProfileModal({ isOpen, setIsOpen }: IModal) {
  const user = usePersistStore(useAuthStore, (state) => state.user);

  const [displayName, setDisplayName] = useState<string>();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    setDisplayName(user?.displayName ?? "");
    setUserName(user?.userName ?? "");
  }, [user]);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={
          "fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-slate-950/50 backdrop-blur-sm"
        }
      >
        <Dialog.Panel
          className={
            "mx-5 min-w-[40%] max-w-screen-md rounded-lg bg-slate-900 p-5"
          }
        >
          <Dialog.Title
            className={
              "mb-10 flex items-center justify-between gap-5 text-xl font-bold"
            }
          >
            <h3>Edit Your Profile</h3>
            <button onClick={() => setIsOpen(false)}>
              <XIcon className="aspect-square w-7 fill-white transition-all duration-150 hover:fill-rose-500" />
            </button>
          </Dialog.Title>
          <div className="flex flex-col gap-2 font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <div className="relative aspect-square w-14 overflow-hidden rounded-full bg-slate-700">
                <Image src={user?.photoURL ?? ""} alt="Profile picture" fill />
              </div>
              <button className="flex w-fit items-center gap-2 rounded-md bg-slate-700 px-5 py-2 text-sm font-bold text-white transition-all duration-150 hover:bg-slate-600 active:translate-y-1">
                Change Picture
              </button>
            </div>
            <div>
              <label htmlFor="display-name">Name</label>
              <input
                id="display-name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                value={user?.email ?? ""}
                disabled
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white disabled:text-slate-500"
              />
            </div>
          </div>
          <button
            onClick={() => {
              changeUserProfile(user?.uid ?? "", {
                displayName: displayName,
                userName: userName,
              }).then(() => setIsOpen(false));
            }}
            disabled={
              displayName === user?.displayName && userName === user?.userName
            }
            className="mt-10 w-full rounded-lg bg-sky-500 py-2 font-bold transition-all duration-150 hover:bg-sky-400 active:translate-y-1 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500"
          >
            Save Changes
          </button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default EditProfileModal;
