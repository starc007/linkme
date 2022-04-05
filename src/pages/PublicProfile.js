import React, { useEffect, useState } from 'react'
import ClipLoader  from 'react-spinners/MoonLoader';
import {useParams} from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import ShowProfile from './Private/ShowProfile';

const PublicProfile = () => {
  const { getPublicUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
    const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await getPublicUser(username);
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
            src={user?.avitar}
            className="sm:w-36 sm:h-36 w-24 h-24 rounded-full border"
          />
          <label className="text-xl sm:text-3xl font-bold mt-4 primary-text">
            {user?.name}
          </label>
          <label className="text-xs sm:text-base font-bold secondary-text">
            @{user?.username}
          </label>
          <ShowProfile profile={user} />
        </div>
      )}
    </div>
  )
}

export default PublicProfile