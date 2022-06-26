import API from "./index";

export const register = (formInformations) => {
  return API.post("/auth/register", formInformations);
};

export const login = (formInformations) => {
  return API.post("/auth/login", formInformations);
};

export const logout = () => {
  return API.get("/auth/logout", {
    headers: {
      Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};

export const getLoggedInUser = () => {
  return API.get("/auth/user", {
    headers: {
      Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};
