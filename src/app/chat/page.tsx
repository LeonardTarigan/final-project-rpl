import ChatProfileCard from "@/components/chat/chat-profile-card";
import SearchIcon from "@/components/icons/search-icon";

function ChatPage() {
  return (
    <main className="grow basis-[70%] border-x border-slate-700">
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
        <ChatProfileCard />
        <ChatProfileCard />
        <ChatProfileCard />
        <ChatProfileCard />
      </section>
    </main>
  );
}

export default ChatPage;
