import React, { useContext, useState, useEffect } from "react";
import * as Api from "../api";
import setAuthorizationToken from "../utils/setAuthorizationToken";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState();

  async function signup(tokenId, avitar) {
    try {
      const response = await Api.register(tokenId, avitar);
      setCurrentUser(response.data.user);

      setIsAuthenticated(true);
      localStorage.setItem("link-token", response.data.token);
      localStorage.setItem("link-userid", response.data.user._id);
      setAuthorizationToken(response.data.token);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  async function login(tokenId) {
    try {
      const response = await Api.login(tokenId);
      setCurrentUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem("link-token", response.data.token);
      localStorage.setItem("link-userid", response.data.user._id);
      setAuthorizationToken(response.data.token);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  function logout() {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("link-token");
    localStorage.removeItem("link-userid");
    setAuthorizationToken(null);
    window.location.href = "/";
  }

  async function getUser() {
    try {
      const response = await Api.getUser();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  function setErrorNull() {
    setError(null);
  }

  async function updateUser(data) {
    try {
      const response = await Api.updateUser(data);
      setCurrentUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }

  async function getPublicUser(username) {
    try {
      const response = await Api.getPublicUser(username);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("link-token");
    if (token) {
      // setAuthorizationToken(token);
      // setCurrentUser(getUser());
      setIsAuthenticated(true);
    }
  }, []);

  const value = {
    currentUser,
    isAuthenticated,
    login,
    signup,
    logout,
    error,
    getUser,
    setErrorNull,
    updateUser,
    getPublicUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
