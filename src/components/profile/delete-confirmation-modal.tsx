import { IModal } from "@/utils/types.ts";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import XIcon from "../icons/x-icon";

function DeleteConfirmationModal({ isOpen, setIsOpen }: IModal) {
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
            <h3>Confirm Delete</h3>
            <button onClick={() => setIsOpen(false)}>
              <XIcon className="aspect-square w-7 fill-white transition-all duration-150 hover:fill-rose-500" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            This will delete this post permanently. You cannot undo this action.
          </Dialog.Description>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="mt-10 w-fit rounded-lg bg-slate-800 px-5 py-2 font-bold transition-all duration-150 hover:bg-slate-600 active:translate-y-1"
            >
              Cancel
            </button>
            <button className="mt-10 w-fit rounded-lg bg-rose-600 px-5 py-2 font-bold transition-all duration-150 hover:bg-rose-500 active:translate-y-1">
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default DeleteConfirmationModal;
