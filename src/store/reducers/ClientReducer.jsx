import {
  ClientLanguage,
  ClientRoles,
  ClientTheme,
  ClientUser,
} from "../action/ClientReducerAction";

const initialValue = {
  user: {
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
  },
};

const ClientReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ClientUser:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case ClientRoles:
      return {
        ...state,
        user: { ...state.user, roles: action.payload },
      };
    case ClientTheme:
      return { ...state, user: { ...state.user, theme: action.payload } };
    case ClientLanguage:
      return { ...state, user: { ...state.user, language: action.payload } };
    default:
      return state;
  }
};
export default ClientReducer;
