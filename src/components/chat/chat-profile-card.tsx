import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import Link from "next/link";

export interface IChatProfileCard {
  userName: string;
  timeStamp: Date;
  lastMessage: string;
  imageUrl?: string;
}

function ChatProfileCard({
  userName,
  timeStamp,
  lastMessage,
}: IChatProfileCard) {
  return (
    <Link
      href={"/chat/1"}
      className="flex items-center gap-2 border-b border-slate-700 p-5 text-sm text-slate-500 transition-all duration-150 hover:bg-slate-900"
    >
      <div className="basis-[10%]">
        <div className="aspect-square rounded-full bg-slate-800"></div>
      </div>
      <div className="flex basis-[90%] flex-col">
        <div className="flex items-center gap-1">
          <h2 className="text-base font-bold text-white">@{userName} </h2>
          <span> · </span>
          <span className="font-semibold text-slate-500">
            {/* {formatRelativeTime(timeStamp)} */}
          </span>
        </div>
        <p className="line-clamp-1">{lastMessage}</p>
      </div>
    </Link>
  );
}

export default ChatProfileCard;
