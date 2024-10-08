import axios from "axios";
import { toast } from "react-toastify";

export const ClientUser = "User";
export const ClientRoles = "Client Roles";
export const ClientTheme = "Client Theme";
export const ClientLanguage = "Client Language";
export const ClientAddress = "Client saved Address data";
export const ClientCard = "Client saved Cart data";
export const ClientOrders = "Fetch Client Orders";

export const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 5000,
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

export const setAddress = (data) => {
  return { type: ClientAddress, payload: data };
};

export const setCardData = (data) => {
  return { type: ClientCard, payload: data };
};

export const setOrders = (data) => {
  return { type: ClientOrders, payload: data };
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

export const fetchAddress = (token) => async (dispatch) => {
  try {
    const res = await instance.get("/user/address", {
      headers: { Authorization: token },
    });
    dispatch(setAddress(res.data));
  } catch (err) {
    toast("Address request failed " + err.data);
  }
};

export const createAddress = (data, token) => async (dispatch) => {
  try {
    if (data.id) {
      await instance.put("/user/address", data, {
        headers: { Authorization: token },
      });
      toast("Address has been update.");
    } else {
      await instance.post("/user/address", data, {
        headers: { Authorization: token },
      });
      toast("Address has been added.");
    }

    dispatch(fetchAddress(token));
  } catch (err) {
    toast(err);
  }
};

export const deleteAddress = (data, token) => async (dispatch) => {
  try {
    await instance.delete(`/user/address/${data.id}`, {
      headers: { Authorization: token },
    });
    toast(`Title: ${data.title} succesfully deleted!`);
    dispatch(fetchAddress(token));
  } catch (err) {
    toast(err);
  }
};

export const fetchCardData = (token) => async (dispatch) => {
  try {
    const res = await instance.get("/user/card", {
      headers: { Authorization: token },
    });
    dispatch(setCardData(res.data));
  } catch (err) {
    toast("Card data request failed. " + err);
  }
};

export const createCardData = (data, token) => async (dispatch) => {
  try {
    if (data.id) {
      await instance.put("/user/card", data, {
        headers: { Authorization: token },
      });
      toast("Card data has been update.");
    } else {
      await instance.post("/user/card", data, {
        headers: { Authorization: token },
      });
      toast("Card data has been added.");
    }

    dispatch(fetchCardData(token));
  } catch (err) {
    toast(err);
  }
};

export const deleteCardData = (data, token) => async (dispatch) => {
  try {
    await instance.delete(`/user/card/${data.id}`, {
      headers: { Authorization: token },
    });
    toast(`Card succesfully removed!`);
    dispatch(fetchCardData(token));
  } catch (err) {
    toast(err);
  }
};

export const fetchUserOrders = (token) => async (dispatch) => {
  try {
    const res = await instance.get("/order", {
      headers: { Authorization: token },
    });
    dispatch(setOrders(res.data));
  } catch (err) {
    toast(err);
  }
};
