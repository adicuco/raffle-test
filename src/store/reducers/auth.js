import { AUTH_LOGIN, AUTH_REGISTER } from "../../constants/actionTypes";
import { JWT_TOKEN_KEY } from "../../constants";
import {
  localStorageGetItem,
  localStorageSetItem,
  localStorageRemoveItem,
} from "../../utils/storage";

const initialState = {
  token: localStorageGetItem(JWT_TOKEN_KEY),
  isAuth: false,
  loading: false,
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN.REQEST:
    case AUTH_REGISTER.REQEST:
      return { ...state, loading: true };

    case AUTH_LOGIN.SUCCESS:
    case AUTH_REGISTER.SUCCESS:
      const { user, token } = payload;
      localStorageSetItem(JWT_TOKEN_KEY, token);
      return { ...state, isAuth: true, loading: false, user, token };

    case AUTH_LOGIN.FAILURE:
    case AUTH_REGISTER.FAILURE:
      localStorageRemoveItem(JWT_TOKEN_KEY);
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};
