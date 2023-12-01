import PapperPlaneIcon from "@/components/icons/papper-plane-icon";

function ChatDetailPage() {
  return (
    <main className="flex h-screen grow basis-[70%] flex-col justify-between border-x border-slate-700 pb-16 sm:pb-0">
      <section className="flex items-center gap-2 bg-slate-900 p-5 text-sm">
        <div className="basis-[10%]">
          <div className="aspect-square rounded-full bg-slate-800"></div>
        </div>
        <div className="flex basis-[90%] flex-col">
          <h1 className="text-base font-bold">Donald Truck</h1>
          <p className="font-semibold text-slate-500">@donaltruk2231</p>
        </div>
      </section>
      <section className="grow overflow-y-auto">
        <div className="h-screen">asdasd</div>
        <div className="h-screen">asdasd</div>
        <div className="h-screen">asdasd</div>
      </section>
      <section className="flex gap-2 bg-slate-900 p-5 text-sm">
        <textarea
          placeholder="Type a Message"
          rows={1}
          className="w-full resize-none rounded-full bg-slate-800 px-4 py-2 placeholder:font-semibold placeholder:text-slate-500"
        />
        <button>
          <PapperPlaneIcon className="h-7 w-7 fill-slate-500 transition-all duration-150 hover:fill-indigo-600 active:translate-x-1" />
        </button>
      </section>
    </main>
  );
}

export default ChatDetailPage;
