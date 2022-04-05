import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin,FaGithub,FaYoutube,FaMediumM,FaDribbble,FaBehance,FaEthereum } from "react-icons/fa";
import {SiHashnode} from 'react-icons/si';
import {ImLink} from 'react-icons/im';
const ShowProfile = ({ profile }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap sm:justify-star justify-center">
          {profile?.portfolio && (
            <a
              href={profile?.portfolio}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <ImLink className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Portfolio
              </span>
            </a>
          )}
          {profile?.insta && (
            <a
              href={profile?.insta}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaInstagram className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Instagram
              </span>
            </a>
          )}
          {profile?.twitter && (
            <a
              href={profile?.twitter}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaTwitter className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Twitter
              </span>
            </a>
          )}
          {profile?.linkedin && (
            <a
              href={profile?.linkedin}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaLinkedin className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Linkedin
              </span>
            </a>
          )}
          {profile?.github && (
            <a
              href={profile?.github}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaGithub className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Github
              </span>
            </a>
          )}
          {profile?.medium && (
            <a
              href={profile?.medium}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaMediumM className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Medium
              </span>
            </a>
          )}
          {profile?.hashnode && (
            <a
              href={profile?.hashnode}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <SiHashnode className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Hashnode
              </span>
            </a>
          )}
          {profile?.youtube && (
            <a
              href={profile?.youtube}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaYoutube className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Youtube
              </span>
            </a>
          )}
          {profile?.dribble && (
            <a
              href={profile?.dribble}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaDribbble className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Dribble
              </span>
            </a>
          )}
          {profile?.behance && (
            <a
              href={profile?.behance}
              target="_blank"
              className="w-60 h-12 primary-border rounded-xl mx-2 mt-4 flex items-center justify-center z-20"
            >
              <FaBehance className="text-2xl primary-text mr-2" />
              <span className="text-lg font-semibold primary-text">
                Behance
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
