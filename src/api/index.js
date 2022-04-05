import axios from "axios";

const url = "http://localhost:1437/api/";

export const register = (tokenId, avitar) =>
  axios.post(url + "register", { tokenId, avitar });

export const login = (tokenId) => axios.post(url + "login", { tokenId });

export const getUser = () => axios.get(url + "get-user");
export const updateUser = (data) => axios.post(url + "update/user", data);
export const getPublicUser = (username) => axios.get(url + "get/user/" + username);