import axios from "axios";
import { toast } from "react-toastify";

export const ClientUser = "User";
export const ClientRoles = "Client Roles";
export const ClientTheme = "Client Theme";
export const ClientLanguage = "Client Language";

export const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 3000,
});

export const setUser = (data) => {
  return { type: ClientUser, payload: data };
};

export const setRoles = (data) => {
  return { type: ClientRoles, payload: data };
};

export const setTheme = (theme) => {
  return { type: ClientTheme, payload: theme };
};

export const setLanguage = (language) => {
  return { type: ClientLanguage, payload: language };
};

export const fetchUser = (creds, history) => async (dispatch) => {
  const data1 = { ...creds };
  delete data1.remember;
  try {
    const res = await instance.post("login", data1);
    dispatch(setUser(res.data));
    if (creds.remember) {
      localStorage.setItem("token", res.data.token);
      instance.defaults.headers.common["token"] = res.data.token;
    }
    history.goBack() || history.push("/");
  } catch (err) {
    toast.error(err.message);
  }
};

export const fetchRoles = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/roles"
    );
    dispatch(setRoles(res.data));
  } catch (error) {
    console.log("Roles data alınamadı", error);
  }
};

export const fetchUserWToken = (token) => async (dispatch) => {
  try {
    const res = await instance.get("/verify", {
      headers: { Authorization: token },
    });
    dispatch(setUser(res.data));
    localStorage.setItem("token", res.data.token);
    instance.defaults.headers.common["token"] = res.data.token;
  } catch (err) {
    localStorage.removeItem("token");
    toast("Otomatik Giriş için Şifreniz geçerli değildir");
  }
};
