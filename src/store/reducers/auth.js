import { AUTH_LOGIN, AUTH_REGISTER } from "../../constants/actionTypes";

const initialState = {
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
      const { user } = payload;
      return { ...state, isAuth: true, loading: false, user };

    case AUTH_LOGIN.FAILURE:
    case AUTH_REGISTER.FAILURE:
      return { ...state, isAuth: false, loading: false, user: null };

    default:
      return state;
  }
};
