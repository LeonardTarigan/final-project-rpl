import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import { IPostCard } from "@/utils/types.ts";
import MessageDotsIcon from "../icons/message-dots-icon";

function HomePostCard({
  name,
  userName,
  timeStamp,
  location,
  description,
}: IPostCard) {
  return (
    <div className="flex gap-2 border-b border-slate-700 p-5 text-sm ">
      <div className="basis-[15%] sm:basis-[10%]">
        <div className="aspect-square w-full rounded-full bg-slate-700"></div>
      </div>
      <div className="flex basis-[90%] flex-col gap-2">
        <div>
          <h2>
            <span className="font-bold md:text-lg">{name} </span>
            <span className="font-semibold text-slate-500">@{userName}</span>
          </h2>
          <div className="font-semibold text-slate-500">
            <span>{formatRelativeTime(timeStamp)}</span>
            <span> · </span>
            <span>{location}</span>
          </div>
        </div>
        <p>{description}</p>
        <button className="mt-5 flex w-fit items-center gap-2 rounded-md bg-slate-800 px-5 py-2 font-bold transition-all duration-150 hover:bg-slate-600 active:translate-y-1">
          <MessageDotsIcon className="h-5 w-5" />
          <span>Chat</span>
        </button>
      </div>
    </div>
  );
}

export default HomePostCard;
