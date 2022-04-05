import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

var handleToken = () => {
  let token = localStorage.getItem("link-token");
  const { exp } = parseJwt(token);
  if (exp * 1000 < Date.now()) {
    localStorage.clear();
    window.location.reload();
    return false;
  } else {
    return true;
  }
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated && handleToken() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
