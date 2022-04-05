import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrivateNav from "../../components/PrivateNav";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const { getUser } = useAuth();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUser(res);
    };
    fetchUser();
  }, []);
  return (
    <div className="max-w-xl lg:max-w-screen-xl lg:px-28 px-4 mx-auto">
      <PrivateNav user={user} />
      <Outlet />
    </div>
  );
};

export default Home;
