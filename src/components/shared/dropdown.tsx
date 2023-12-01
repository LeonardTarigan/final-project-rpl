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
    <Menu>
      <div className="w-full md:w-max">
        <Menu.Button
          className={
            "relative flex w-full items-center justify-between gap-2 rounded-full bg-slate-800 px-5 py-2 font-medium text-slate-400 md:justify-start"
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
          className={" w-full"}
        >
          <Menu.Items
            className={
              "absolute right-0 mt-2 flex max-h-44 w-full min-w-[10rem] flex-col overflow-hidden overflow-y-auto rounded-lg bg-slate-800 p-2 md:w-fit"
            }
          >
            {options.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => dispatch(item)}
                      className={`${
                        active && "bg-indigo-600"
                      } cursor-pointer rounded-md p-2 text-sm font-medium transition-all duration-150`}
                    >
                      {item}
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
