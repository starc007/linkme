import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ClipLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";
import ShowProfile from "./ShowProfile";

const Profile = () => {
  const { getUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await getUser();
      setUser(res);
      setLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      {loading ? (
        <ClipLoader size={40} color={"#041c32"} loading={loading} />
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={user.avitar}
            className="sm:w-36 sm:h-36 w-24 h-24 rounded-full border"
          />
          <label className="text-xl sm:text-3xl font-bold mt-4 primary-text">
            {user.name}
          </label>
          <label className="text-xs sm:text-base font-bold secondary-text">
            @{user.username}
          </label>
          <div className="flex space-x-4">
          <Link
            to="/edit/profile"
            className="text-sm font-bold my-4 px-3 rounded-xl py-2 border primary-text primary-border"
          >
            Add Social Profiles
          </Link>
          <Link
            to={`/${user.username}`}
            className="text-sm font-bold my-4 px-3 rounded-xl py-2 border primary-text primary-border"
          >
            Public view
          </Link>
          </div>
          <ShowProfile profile={user} />
        </div>
      )}
    </div>
  );
};

export default Profile;
