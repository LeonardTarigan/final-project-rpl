import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";
import XIcon from "../icons/x-icon";

interface IModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function EditProfileModal({ isOpen, setIsOpen }: IModal) {
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
            "min-w-[40%] max-w-screen-md rounded-lg bg-slate-900 p-5 px-5"
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
              <div className="aspect-square w-14 rounded-full bg-slate-700"></div>
              <button className="flex w-fit items-center gap-2 rounded-md bg-slate-700 px-5 py-2 text-sm font-bold text-white transition-all duration-150 hover:bg-slate-600 active:translate-y-1">
                Change Picture
              </button>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                disabled
                className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white disabled:text-slate-500"
              />
            </div>
          </div>
          <button className="mt-10 w-full rounded-lg bg-indigo-600 py-2 font-bold transition-all duration-150 hover:bg-indigo-500 active:translate-y-1">
            Save Changes
          </button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default EditProfileModal;
