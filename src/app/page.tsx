"use client";

import PostCard, { IHomePostCard } from "@/components/home/post-card";
import SearchIcon from "@/components/icons/search-icon";
import Dropdown from "@/components/shared/dropdown";
import { useLocation } from "@/hooks/useLocation";

const dummyData: IHomePostCard = {
  name: "Donald Truck",
  userName: "donaltruk2231",
  timestamp: new Date(2023, 10, 27, 12, 30, 0),
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto recusandae velit repudiandae consequuntur reprehenderit perspiciatis mollitia vero molestias eius, consectetur adipisci eaque illum aut esse, aliquam culpa iste quam?",
  location: "FILKOM",
};

export default function Home() {
  const { selectedOption, setSelectedOption } = useLocation();

  const options = ["FILKOM", "FIA", "FEB"];

  return (
    <main className="grow basis-[70%] border-x border-slate-700">
      <section className="sticky top-0 mb-3 flex gap-3 bg-slate-950 p-5 text-sm">
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
          options={options}
          dispatch={setSelectedOption}
        />
      </section>
      <section className="min-h-screen">
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
        <PostCard {...dummyData} />
      </section>
    </main>
  );
}
