import { AUTH_LOGIN, AUTH_REGISTER } from "../../constants/actionTypes";

export const login = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN.SUCCESS,
      payload: {
        user: {
          username,
        },
      },
    });
  };
};

export const register = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_REGISTER.SUCCESS,
      payload: {
        user: {
          username,
        },
      },
    });
  };
};
