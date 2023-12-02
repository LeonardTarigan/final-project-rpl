"use client";

import ChatProfileCard, {
  IChatProfileCard,
} from "@/components/chat/chat-profile-card";
import SearchIcon from "@/components/icons/search-icon";
import { usePersistStore } from "@/hooks/usePersistStore";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { use, useEffect } from "react";

const dummyData: IChatProfileCard = {
  userName: "donaltruk2231",
  timeStamp: new Date(2023, 7, 15, 12, 30, 0),
  lastMessage:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto recusandae velit repudiandae consequuntur reprehenderit perspiciatis mollitia vero molestias eius, consectetur adipisci eaque illum aut esse, aliquam culpa iste quam?",
};

function ChatPage() {
  const user = usePersistStore(useAuthStore, (state) => state.user);

  return (
    <>
      {user && (
        <main className="grow basis-[70%] border-x border-slate-700">
          <div className="flex items-center justify-center pb-3 pt-5 sm:hidden">
            <div className="relative aspect-[16/5] w-[30%]">
              <Image src={"/logo.png"} alt="Logo" fill />
            </div>
          </div>
          <section className="sticky top-0 mb-3 flex gap-3 bg-slate-950 p-5 text-sm">
            <div className="flex grow items-center gap-2 rounded-full border-2 border-transparent bg-slate-800 px-4 focus-within:border-white">
              <SearchIcon className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Chat"
                className="w-full bg-slate-800 py-2 focus:outline-none"
              />
            </div>
          </section>
          <section>
            <ChatProfileCard {...dummyData} />
            <ChatProfileCard {...dummyData} />
            <ChatProfileCard {...dummyData} />
            <ChatProfileCard {...dummyData} />
          </section>
        </main>
      )}
    </>
  );
}

export default ChatPage;
