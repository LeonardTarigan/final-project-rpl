"use client";

import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import { UserPost } from "@/utils/types.ts";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import CheckCircleIcon from "../icons/check-circle-icon";
import QuestionCircleIcon from "../icons/question-circle-icon";
import TrashBinIcon from "../icons/trash-bin-icon";
import XIcon from "../icons/x-icon";
import { useProfilePostStore } from "@/store/useProfilePostStore";

function ProfilePostCard({
  owner,
  timestamp,
  location,
  description,
  isResolved,
  title,
  id,
}: UserPost) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  const { deletePost, resolvePost } = useProfilePostStore((state) => state);

  return (
    <>
      <Transition
        show={isDeleteConfirmationOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          open={isDeleteConfirmationOpen}
          onClose={() => setIsDeleteConfirmationOpen(false)}
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
              <h3>Confirm Delete</h3>
              <button onClick={() => setIsDeleteConfirmationOpen(false)}>
                <XIcon className="aspect-square w-7 fill-white transition-all duration-150 hover:fill-rose-500" />
              </button>
            </Dialog.Title>
            <Dialog.Description>
              This will delete this post permanently. You cannot undo this
              action.
            </Dialog.Description>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteConfirmationOpen((prev) => !prev)}
                className="mt-10 w-fit rounded-lg bg-slate-800 px-5 py-2 font-bold transition-all duration-150 hover:bg-slate-600 active:translate-y-1"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  deletePost(id ?? "").then(() =>
                    setIsDeleteConfirmationOpen((prev) => !prev),
                  )
                }
                className="mt-10 w-fit rounded-lg bg-rose-600 px-5 py-2 font-bold transition-all duration-150 hover:bg-rose-500 active:translate-y-1"
              >
                Delete
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
      <div className="flex gap-2 border-b border-slate-700 p-5 text-sm ">
        <div className="basis-[10%] ">
          <div className="relative -z-10 aspect-square w-full overflow-hidden rounded-full bg-slate-700">
            <Image src={owner.photoURL ?? ""} alt="Profile Picture" fill />
          </div>
        </div>
        <div className="flex basis-[90%] flex-col gap-2">
          <h1 className="text-base font-bold">{title}</h1>
          <div>
            <div className="flex items-center gap-1">
              <h2 className="font-semibold">{owner.displayName}</h2>
              <span className="font-semibold text-slate-500">
                @{owner.userName}
              </span>
            </div>

            <div className="font-semibold text-slate-500">
              <span>{formatRelativeTime(timestamp)}</span>
              <span> · </span>
              <span>{location}</span>
            </div>
          </div>
          <p>{description}</p>
          <div className="flex gap-2">
            <button
              onClick={() => resolvePost(id ?? "")}
              className="mt-5 flex w-fit items-center gap-2 rounded-md border-2 border-slate-800 bg-slate-800 px-5 py-2 font-bold transition-all duration-150 hover:border-slate-600 hover:bg-slate-600 active:translate-y-1"
            >
              {isResolved ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <QuestionCircleIcon className="h-5 w-5 text-yellow-500" />
              )}
              <span>{isResolved ? "Unresolve" : "Resolve"}</span>
            </button>
            <button
              onClick={() => setIsDeleteConfirmationOpen((prev) => !prev)}
              className="mt-5 flex w-fit items-center gap-2 rounded-md border-2 border-rose-600 bg-slate-800 bg-transparent px-5 py-2 font-bold text-rose-600 transition-all duration-150 hover:bg-rose-600 hover:text-white active:translate-y-1"
            >
              <TrashBinIcon className="h-5 w-5" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePostCard;
