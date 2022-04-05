import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./Modal";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="h-16 w-full flex justify-between py-3">
      <Link to="/" className="no-underline text-4xl font-bold">
        link
        <span className="relative inline-block px-2">
          <div className="absolute inset-0 transform -skew-x-12 primary-bg" />
          <span className="relative secondary-text">ME</span>
        </span>
      </Link>
      <div className="flex">
        <button
          onClick={() => setModalShow(true)}
          className="primary-bg px-4 py-1 rounded-2xl secondary-text text-lg font-semibold"
        >
          Login
        </button>
      </div>
      <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Navbar;
