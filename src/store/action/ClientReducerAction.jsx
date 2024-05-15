import axios from "axios";

export const ClientUser = "User";
export const ClientRoles = "Client Roles";
export const ClientTheme = "Client Theme";
export const ClientLanguage = "Client Language";

export const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 1000,
});

export const setUser = (creds) => async (dispatch) => {
  const data1 = { ...creds };
  delete data1.remember;
  try {
    const res = await instance.post("login", data1);
    dispatch({ type: ClientUser, payload: res.data });
    if (creds.remember) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  } catch (err) {
    return err;
  }
};

export const setUserfromToken = (creds) => {
  return { type: ClientUser, payload: creds };
};

export const setRoles = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/roles"
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
