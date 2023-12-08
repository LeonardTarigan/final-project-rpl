"use client";

import HomePostCard from "@/components/home/post-card";
import SearchIcon from "@/components/icons/search-icon";
import Dropdown from "@/components/shared/dropdown";
import { getAllLocations } from "@/firebase/location";
import { useLocationStore } from "@/store/useLocationStore";
import { IPostCard } from "@/utils/types.ts";
import Image from "next/image";
import { useEffect, useState } from "react";

const dummyData: IPostCard = {
  name: "Donald Truck",
  userName: "donaltruk2231",
  timeStamp: new Date(2023, 10, 27, 12, 30, 0),
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto recusandae velit repudiandae consequuntur reprehenderit perspiciatis mollitia vero molestias eius, consectetur adipisci eaque illum aut esse, aliquam culpa iste quam?",
  location: "FILKOM",
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("All Locations");

  const { locations } = useLocationStore((state) => state);

  return (
    <main className="grow basis-[70%] border-x border-slate-700">
      <div className="flex items-center justify-center pb-3 pt-5 sm:hidden">
        <div className="relative aspect-[16/5] w-[30%]">
          <Image src={"/logo.png"} alt="Logo" fill />
        </div>
      </div>
      <section className="sticky top-0 mb-3 flex flex-col gap-3 bg-slate-950 p-5 text-sm md:flex-row">
        <div className="flex grow items-center gap-2 rounded-full border-2 border-transparent bg-slate-800 px-4 focus-within:border-white">
          <SearchIcon className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-slate-800 py-2 focus:outline-none"
          />
        </div>

        <Dropdown
          selectedOption={selectedOption}
          options={locations}
          dispatch={setSelectedOption}
        />
      </section>
      <section className="min-h-screen">
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
        <HomePostCard {...dummyData} />
      </section>
    </main>
  );
}
