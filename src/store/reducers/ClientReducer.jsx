import {
  ClientAddress,
  ClientCard,
  ClientLanguage,
  ClientRoles,
  ClientTheme,
  ClientUser,
} from "../action/ClientReducerAction";

const initialValue = {
  user: {
    addressList: [],
    creditCards: [],
  },
  roles: [],
  theme: "",
  language: "",
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
        roles: action.payload,
      };
    case ClientTheme:
      return { ...state, theme: action.payload };
    case ClientLanguage:
      return { ...state, language: action.payload };
    case ClientAddress:
      return {
        ...state,
        user: {
          ...state.user,
          addressList: [...action.payload],
        },
      };
    case ClientCard:
      return {
        ...state,
        user: {
          ...state.user,
          creditCards: [...state.user.creditCards, ...action.payload],
        },
      };
    default:
      return state;
  }
};
export default ClientReducer;
