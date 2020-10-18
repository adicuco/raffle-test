import axios from "axios";

import { AUTH_LOGIN, AUTH_REGISTER } from "../../constants/actionTypes";
import api from "../../constants/api";

export const login = ({ username, password }) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOGIN.REQUEST,
    });

    try {
      const { data } = await axios.post(api.login(), {
        username,
        password,
      });

      dispatch({
        type: AUTH_LOGIN.SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: AUTH_LOGIN.FAILURE,
      });
    }
  };
};

export const register = ({ username, password }) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_REGISTER.REQUEST,
    });

    try {
      const { data } = await axios.post(api.register(), {
        username,
        password,
      });

      dispatch({
        type: AUTH_REGISTER.SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: AUTH_REGISTER.FAILURE,
      });
    }
  };
};
