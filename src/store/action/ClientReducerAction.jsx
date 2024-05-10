export const ClientUser = "User";
export const ClientRoles = "Client Roles";
export const ClientTheme = "Client Theme";
export const ClientLanguage = "Client Language";

export const setUser = (user) => {
  return { type: ClientUser, payload: user };
};

export const setRoles = (role) => {
  return { type: ClientRoles, payload: role };
};

export const setTheme = (theme) => {
  return { type: ClientTheme, payload: theme };
};

export const setLanguage = (language) => {
  return { type: ClientLanguage, payload: language };
};
