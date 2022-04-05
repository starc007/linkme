import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";

export const CHome = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="max-w-xl lg:max-w-screen-xl lg:px-28 px-4 mx-auto">
      <div className="h-16 ">
        <Navbar />
      </div>
      {isAuthenticated && <Navigate to="/profile" />}
      <div className="">
        <Outlet />
      </div>
      {/* <div className=" w-full">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
