import ChatProfileCard, {
  IChatProfileCard,
} from "@/components/chat/chat-profile-card";
import SearchIcon from "@/components/icons/search-icon";

const dummyData: IChatProfileCard = {
  userName: "donaltruk2231",
  timeStamp: new Date(2023, 7, 15, 12, 30, 0),
  lastMessage:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto recusandae velit repudiandae consequuntur reprehenderit perspiciatis mollitia vero molestias eius, consectetur adipisci eaque illum aut esse, aliquam culpa iste quam?",
};

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
        <ChatProfileCard {...dummyData} />
        <ChatProfileCard {...dummyData} />
        <ChatProfileCard {...dummyData} />
        <ChatProfileCard {...dummyData} />
      </section>
    </main>
  );
}

export default ChatPage;
