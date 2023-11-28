import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import MessageDotsIcon from "../icons/message-dots-icon";

export interface IHomePostCard {
  name: string;
  userName: string;
  timestamp: Date;
  location: string;
  description: string;
  imageUrl?: string;
}

function HomePostCard({
  name,
  userName,
  timestamp,
  location,
  description,
}: IHomePostCard) {
  return (
    <div className="flex gap-2 border-b border-slate-700 p-5 text-sm ">
      <div className="basis-[10%] ">
        <div className="aspect-square w-full rounded-full bg-slate-700"></div>
      </div>
      <div className="flex basis-[90%] flex-col gap-2">
        <div className="flex items-center gap-1">
          <h2 className="text-lg font-bold">{name}</h2>
          <span className="font-semibold text-slate-500">@{userName}</span>
        </div>
        <div className="font-semibold text-slate-500">
          <span>{formatRelativeTime(timestamp)}</span>
          <span> · </span>
          <span>{location}</span>
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
