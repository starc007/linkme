import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../contexts/AuthContext";

const PrivateNav = ({ user }) => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white h-16 flex justify-between px-2 py-3">
      <Link
        to="/profile"
        className="sm:text-4xl text-3xl font-bold primary-text"
      >
        link
        <span className="relative inline-block px-2">
          <div className="absolute inset-0 transform -skew-x-12 primary-bg" />
          <span className="relative secondary-text">ME</span>
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        <button>
          <img src={user?.avitar} className="w-10 h-10 rounded-full border" />
        </button>
        <button
          onClick={logout}
          className="hover:bg-gray-300 primary-text rounded-lg p-1 transition duration-500"
        >
          <IoMdLogOut size={33} />
        </button>
      </div>
    </nav>
  );
};

export default PrivateNav;
