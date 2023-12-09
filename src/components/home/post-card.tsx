import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import { IPostCard, UserPost } from "@/utils/types.ts";
import MessageDotsIcon from "../icons/message-dots-icon";
import Image from "next/image";

function HomePostCard({
  location,
  description,
  owner,
  id,
  title,
  timestamp,
}: UserPost) {
  return (
    <div className="flex gap-2 border-b border-slate-700 p-5 text-sm ">
      <div className="basis-[15%] sm:basis-[10%]">
        <div className="relative -z-10 aspect-square w-full overflow-hidden rounded-full bg-slate-700">
          <Image src={owner.photoURL ?? ""} alt="Profile Picture" fill />
        </div>
      </div>
      <div className="flex basis-[90%] flex-col gap-2">
        <h1 className="text-base font-bold">{title}</h1>
        <div>
          <h2>
            <span className="font-bold">{owner.displayName} </span>
            <span className="font-semibold text-slate-500">
              @{owner.userName}
            </span>
          </h2>
          <div className="font-semibold text-slate-500">
            <span>{formatRelativeTime(timestamp)}</span>
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
