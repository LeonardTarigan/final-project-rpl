function ChatProfileCard() {
  return (
    <div className="flex items-center gap-2 border-b border-slate-700 p-5 text-sm text-slate-500">
      <div className="basis-[10%]">
        <div className="aspect-square rounded-full bg-slate-800"></div>
      </div>
      <div className="flex basis-[90%] flex-col">
        <div className="flex items-center gap-1">
          <h2 className="text-base font-bold text-white">@donaltruk2231 </h2>
          <span> · </span>
          <span className="font-semibold text-slate-500">12 minutes ago</span>
        </div>
        <p className="line-clamp-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolore
          nam repellendus quos itaque tempora suscipit mollitia, autem commodi.
          Vero?
        </p>
      </div>
    </div>
  );
}

export default ChatProfileCard;
