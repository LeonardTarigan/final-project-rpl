import { formatRelativeTime } from "@/utils/global-functions/format-relative-time";
import { IProfilePostCard } from "@/utils/types.ts";
import CheckCircleIcon from "../icons/check-circle-icon";
import QuestionCircleIcon from "../icons/question-circle-icon";
import TrashBinIcon from "../icons/trash-bin-icon";

function ProfilePostCard({
  name,
  userName,
  timeStamp,
  location,
  description,
  isResolved,
}: IProfilePostCard) {
  return (
    <div className="flex gap-2 border-b border-slate-700 p-5 text-sm ">
      <div className="basis-[10%] ">
        <div className="aspect-square w-full rounded-full bg-slate-700"></div>
      </div>
      <div className="flex basis-[90%] flex-col gap-2">
        <div>
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-bold">{name}</h2>
            <span className="font-semibold text-slate-500">@{userName}</span>
          </div>

          <div className="font-semibold text-slate-500">
            <span>{formatRelativeTime(timeStamp)}</span>
            <span> · </span>
            <span>{location}</span>
          </div>
        </div>
        <p>{description}</p>
        <div className="flex gap-2">
          <button className="mt-5 flex w-fit items-center gap-2 rounded-md border-2 border-slate-800 bg-slate-800 px-5 py-2 font-bold transition-all duration-150 hover:border-slate-600 hover:bg-slate-600 active:translate-y-1">
            {isResolved ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : (
              <QuestionCircleIcon className="h-5 w-5 text-yellow-500" />
            )}
            <span>{isResolved ? "Unresolve" : "Resolve"}</span>
          </button>
          <button className="mt-5 flex w-fit items-center gap-2 rounded-md border-2 border-rose-500 bg-slate-800 bg-transparent px-5 py-2 font-bold text-rose-500 transition-all duration-150 hover:bg-rose-500 hover:text-white active:translate-y-1">
            <TrashBinIcon className="h-5 w-5" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePostCard;
