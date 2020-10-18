import { AUTH_LOGIN, AUTH_REGISTER } from "../../constants/actionTypes";

const initialState = {
  token: null,
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
      return { ...state, isAuth: true, loading: false, user, token };

    case AUTH_LOGIN.FAILURE:
    case AUTH_REGISTER.FAILURE:
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
