function ChatDetailPage() {
  return (
    <main className="flex h-screen grow basis-[70%] flex-col justify-between border-x border-slate-700">
      <section className="flex gap-2 bg-slate-900 p-5 text-sm">
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
      </section>
    </main>
  );
}

export default ChatDetailPage;
