import React, { useState } from "react";
import connect from "../connect.png";
import ModalLogin from "./Modal";
const Hero = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="px-4 py-16 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight primary-text sm:text-5xl sm:leading-none">
              Connect your Social media and{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 primary-bg" />
                <span className="relative secondary-text">Share.</span>
              </span>
            </h2>
            <p className="mb-6 text-base primary-text md:text-xl font-semibold">
              add your all social media accounts in one place and share them.
              and the best part is its completely{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 primary-bg" />
                <span className="relative secondary-text font-bold">Free</span>
              </span>
            </p>
            <button
              onClick={() => setModalShow(true)}
              className="primary-bg px-4 py-3 rounded-2xl secondary-text text-xl font-semibold"
            >
              signup now
            </button>
            <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <img className="object-cover" src={connect} alt="connect" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
