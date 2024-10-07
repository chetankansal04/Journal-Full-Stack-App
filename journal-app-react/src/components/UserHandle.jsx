import React from "react";
import AvatarSvg from "./AvatarSvg";

const UserHandle = () => {
  const userName = localStorage.getItem("userName")|| 'Guest';
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="shadow-lg w-fit flex flex-col self-center items-center px-4 rounded-xl gap-10 py-8">
      <div className="flex items-center">
        {/* Avatar SVG */}
        <div className="scale-110 rounded-full overflow-hidden flex transition hover:scale-110 shadow-lg items-center justify-center">
        <AvatarSvg></AvatarSvg>
        </div>
        {/* User Name */}
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{userName}</h3>
        </div>
      </div>
      <button
        className="bg-red-600 rounded-xl font-semibold transition hover:bg-red-400 hover:scale-110 shadow-xl text-white px-3 py-2"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default UserHandle;
