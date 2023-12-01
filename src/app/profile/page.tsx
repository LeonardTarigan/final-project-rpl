"use client";

import UserEditIcon from "@/components/icons/user-edit-icon";
import EditProfileModal from "@/components/profile/edit-profile-modal";
import ProfilePostCard from "@/components/profile/post-card";
import Dropdown from "@/components/shared/dropdown";
import { useDropdown } from "@/hooks/useDropdown";
import { IProfilePostCard } from "@/utils/types.ts";
import { useState } from "react";

const dummyData: IProfilePostCard = {
  name: "Donald Truck",
  userName: "donaltruk2231",
  timeStamp: new Date(2023, 10, 27, 12, 30, 0),
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto recusandae velit repudiandae consequuntur reprehenderit perspiciatis mollitia vero molestias eius, consectetur adipisci eaque illum aut esse, aliquam culpa iste quam?",
  location: "FILKOM",
  isResolved: false,
};

function ProfilePage() {
  const { selectedOption, setSelectedOption } = useDropdown("All Status");
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const options = ["All Status", "Resolved", "Unresolved"];

  return (
    <main className="relative grow basis-[70%] border-x border-slate-700">
      <EditProfileModal
        isOpen={isEditProfileOpen}
        setIsOpen={setIsEditProfileOpen}
      />

      <div className="h-28 w-full bg-slate-900"></div>

      <section className="sticky top-0 flex flex-col gap-10 bg-slate-950 p-5">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-slate-800"></div>
            <div>
              <h1 className="font-bold">Hari Hatori</h1>
              <p className="text-sm font-semibold text-slate-500">@htri892</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditProfileOpen((prev) => !prev)}
            className="flex w-fit items-center gap-2 rounded-md bg-slate-800 px-5 py-2 text-sm font-bold transition-all duration-150 hover:bg-slate-600 active:translate-y-1"
          >
            <UserEditIcon className="h-5 w-5" />
            <span>Edit Profile</span>
          </button>
        </div>
        <Dropdown
          selectedOption={selectedOption}
          options={options}
          dispatch={setSelectedOption}
        />
      </section>
      <section className="min-h-screen">
        <ProfilePostCard {...dummyData} />
        <ProfilePostCard {...dummyData} />
        <ProfilePostCard {...dummyData} />
        <ProfilePostCard {...dummyData} />
        <ProfilePostCard {...dummyData} />
      </section>
    </main>
  );
}

export default ProfilePage;
