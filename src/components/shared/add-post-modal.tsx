import { useAddPostModalStore } from "@/store/useAddPostModalStore";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import XIcon from "../icons/x-icon";
import Dropdown from "./dropdown";

function AddPostModal() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const { isAddPostModalOpen, closeAddPostModal } = useAddPostModalStore();

  const options = ["FIA", "FILKOM", "FK", "FK", "FK", "FK", "FK", "FK"];

  return (
    <Transition
      show={isAddPostModalOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isAddPostModalOpen}
        onClose={closeAddPostModal}
        className={
          "fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-slate-950/50 backdrop-blur-sm"
        }
      >
        <Dialog.Panel
          className={
            "mx-5 max-h-[80vh] min-w-[40%] max-w-screen-md overflow-y-auto rounded-lg bg-slate-900 "
          }
        >
          <Dialog.Title
            className={
              "sticky top-0 z-[1] flex items-center justify-between gap-5 bg-slate-900 p-5 text-xl font-bold"
            }
          >
            <h3>Add New Post</h3>
            <button onClick={closeAddPostModal}>
              <XIcon className="aspect-square w-7 fill-white transition-all duration-150 hover:fill-rose-500" />
            </button>
          </Dialog.Title>
          <div className="p-5">
            <div className="flex flex-col gap-2 font-semibold">
              <div>
                <label htmlFor="title" className="text-slate-500">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
                />
              </div>
              <div>
                <label htmlFor="description" className="text-slate-500">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full resize-none rounded-md bg-slate-800 px-4 py-2 font-normal text-white outline outline-2 outline-offset-2 outline-transparent placeholder:text-slate-500 focus:outline-white"
                />
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Dropdown
                selectedOption={
                  selectedOption.length === 0
                    ? "Choose Location"
                    : selectedOption
                }
                options={options}
                dispatch={setSelectedOption}
              />
            </div>
            <div className="mt-5 aspect-square w-full rounded-md bg-slate-700"></div>
            <button className="mt-10 w-full rounded-lg bg-sky-500 py-2 font-bold transition-all duration-150 hover:bg-sky-400 active:translate-y-1">
              Save Changes
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default AddPostModal;
