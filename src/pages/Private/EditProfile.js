import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useAuth } from "../../contexts/AuthContext";

const EditProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { getUser, updateUser, error, setErrorNull } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await getUser();
      setUser(res);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);
    const rest = await updateUser(formData);
    setUpdateLoading(false);
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      setErrorNull();
      return;
    }
    enqueueSnackbar(rest.message, {
      variant: "success",
      autoHideDuration: 3000,
      preventDuplicate: true,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="my-8 px-4 w-full">
      <p className="primary-text text-3xl font-bold text-center">
        Edit{" "}
        <span className="relative inline-block px-2">
          <div className="absolute inset-0 transform -skew-x-12 primary-bg" />
          <span className="relative secondary-text">Profile</span>
        </span>
      </p>
      <div className="flex flex-col my-6">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                value={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Email</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                value={formData?.email}
                disabled
              />
            </div>
          </div>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                value={formData?.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">
                Portfolio Website
              </label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your portfolio website"
                value={formData?.portfolio}
                onChange={(e) =>
                  setFormData({ ...formData, portfolio: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Instagram</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your instragram profile url"
                value={formData?.insta}
                onChange={(e) =>
                  setFormData({ ...formData, insta: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Twitter</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your twitter profile url"
                value={formData?.twitter}
                onChange={(e) =>
                  setFormData({ ...formData, twitter: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Wallet Address</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your eth wallet address"
                value={formData?.walletAddress}
                onChange={(e) =>
                  setFormData({ ...formData, walletAddress: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Youtube</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your youtube channel url"
                value={formData?.youtube}
                onChange={(e) =>
                  setFormData({ ...formData, youtube: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Github</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your github profile url"
                value={formData?.github}
                onChange={(e) =>
                  setFormData({ ...formData, github: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Linkedin</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your linkedin profile url"
                value={formData?.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Medium</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your medium profile url"
                value={formData?.medium}
                onChange={(e) =>
                  setFormData({ ...formData, medium: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Hashnode</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your hashnode profile url"
                value={formData?.hashnode}
                onChange={(e) =>
                  setFormData({ ...formData, hashnode: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-around  my-4 flex-wrap">
            <div className="flex flex-col md:w-5/12 w-full">
              <label className="text-sm font-bold mb-2">Behance</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your behance profile url"
                value={formData?.behance}
                onChange={(e) =>
                  setFormData({ ...formData, behance: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col md:w-5/12 w-full md:mt-0 mt-4">
              <label className="text-sm font-bold mb-2">Dribble</label>
              <input
                type="text"
                className="primary-border rounded-lg py-2 px-4 focus:outline-none"
                placeholder="your dribble profile url"
                value={formData?.dribble}
                onChange={(e) =>
                  setFormData({ ...formData, dribble: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-center my-8">
            <button
              type="submit"
              disabled={updateLoading}
              className="primary-bg text-xl secondary-text px-4 py-2 rounded-xl font-semibold"
            >
              {updateLoading ? "updating..." : "update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
