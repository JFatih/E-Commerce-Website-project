import axios from "axios";

export const ClientUser = "User";
export const ClientRoles = "Client Roles";
export const ClientTheme = "Client Theme";
export const ClientLanguage = "Client Language";

export const setUser = (user) => {
  return { type: ClientUser, payload: user };
};

export const setRoles = (creds) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/roles",
      creds
    );
    dispatch({ type: ClientRoles, payload: res.data });
  } catch (error) {
    console.log("Roles data alınamadı", error);
  }
};

export const setTheme = (theme) => {
  return { type: ClientTheme, payload: theme };
};

export const setLanguage = (language) => {
  return { type: ClientLanguage, payload: language };
};
