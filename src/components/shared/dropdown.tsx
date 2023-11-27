"use client";

import { Menu, Transition } from "@headlessui/react";
import AngleDownIcon from "../icons/angle-down.icon";
import { Dispatch, SetStateAction } from "react";

export interface IDropdown {
  selectedOption: string;
  options: string[];
  dispatch: Dispatch<SetStateAction<string>>;
}

export default function Dropdown({
  selectedOption,
  options,
  dispatch,
}: IDropdown) {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button
          className={
            "relative flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2 text-slate-400"
          }
        >
          <span>{selectedOption}</span>
          <AngleDownIcon className="h-3 w-3" />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            className={
              "absolute right-0 mt-2 flex max-h-80 w-fit min-w-[10rem] flex-col overflow-hidden overflow-y-auto rounded-lg bg-slate-800"
            }
          >
            {options.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => dispatch(item)}
                      className={`${active && "bg-indigo-600"} p-2`}
                    >
                      {item}
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
