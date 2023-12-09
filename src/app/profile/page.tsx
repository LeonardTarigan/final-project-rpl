/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import UserEditIcon from "@/components/icons/user-edit-icon";
import EditProfileModal from "@/components/profile/edit-profile-modal";
import ProfilePostCard from "@/components/profile/post-card";
import Dropdown from "@/components/shared/dropdown";
import { usePersistStore } from "@/hooks/usePersistStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useProfilePostStore } from "@/store/useProfilePostStore";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [selectedOption, setSelectedOption] = useState("All Status");
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const options = ["All Status", "Resolved", "Unresolved"];

  const user = usePersistStore(useAuthStore, (state) => state.user);
  const { posts, fetchProfilePost } = useProfilePostStore((state) => state);

  const filteredPosts = posts?.filter((post) => {
    if (selectedOption === "All Status") {
      return true;
    } else if (selectedOption === "Resolved") {
      return post.isResolved;
    } else if (selectedOption === "Unresolved") {
      return !post.isResolved;
    }
    return true;
  });

  useEffect(() => {
    if (user) fetchProfilePost(user?.uid);
    // if (!user) window.location.href = "/auth/login";
  }, [user]);

  return (
    <>
      {user && (
        <main className="relative grow basis-[70%] border-x border-slate-700">
          <EditProfileModal
            isOpen={isEditProfileOpen}
            setIsOpen={setIsEditProfileOpen}
          />

          <div className="h-28 w-full bg-slate-900"></div>

          <section className="sticky top-0 z-0 flex flex-col gap-10 bg-slate-950 p-5">
            <div className="flex items-center justify-between gap-10">
              <div className="flex items-center gap-2">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-800">
                  <Image src={user.photoURL ?? ""} alt="Profile picture" fill />
                </div>
                <div>
                  <h1 className="font-bold">{user.displayName}</h1>
                  <p className="text-sm font-semibold text-slate-500">
                    @{user.userName}
                  </p>
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
          <section>
            {filteredPosts &&
              filteredPosts.map((post, index) => {
                return <ProfilePostCard key={index} {...post} />;
              })}
            {filteredPosts?.length === 0 && (
              <div className="h-full w-full p-5 font-semibold italic text-slate-500">
                No Post :(
              </div>
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default ProfilePage;
