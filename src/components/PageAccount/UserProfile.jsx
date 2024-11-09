"use client"
import React from "react";
import { IconRosetteDiscountCheck, IconRosetteDiscountCheckOff } from "@tabler/icons-react";

const UserProfile = ({ user }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="border border-solid border-gray-300 bg-slate-100 w-[400px] h-[500px] rounded-md">
        <div className="bg-blue-600 w-full h-[20%] rounded-t-md"></div>
        <div className="border border-solid flex justify-center relative">
          <img
            className="rounded-full absolute top-[-50px]"
            src={user ? user.photoURL : "/default-avatar.jpg"}
            alt="User Avatar"
          />
        </div>
        <div className="mt-16 w-full flex justify-center items-center flex-col">
          <p className="font-bold text-2xl">{user?.displayName}</p>
          <p>{user?.email}</p>
          <p className="flex">
            {user?.emailVerified ? (
              <IconRosetteDiscountCheck className="text-blue-600" />
            ) : (
              <IconRosetteDiscountCheckOff className="text-red-600" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;