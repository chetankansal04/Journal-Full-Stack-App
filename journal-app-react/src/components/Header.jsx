import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { PiUserCircleBold } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex sticky top-2 justify-center mt-2 mb-10 z-50">
      <header className="flex items-center justify-between w-full mx-10 md:w-2/3 bg-white shadow-xl p-3 rounded-full border text-md font-bold">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-110"
        >
          <IoArrowBackOutline className="size-6" />
        </Link>
        <Link to="/journal">
          <div className="flex items-center transition-transform duration-300 hover:scale-110">
            <GrNotes className="mr-2  size-6" />
            NoteWorthy
          </div>
        </Link>
        <Link to="userprofile">
          <button className="flex transition-transform duration-300 hover:scale-110">
            <PiUserCircleBold className="size-6 scale-125" />
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
