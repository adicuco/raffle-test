import axios from "axios";

import {
  CHALLENGES_GET_ALL,
  CHALLENGES_GET,
  CHALLENGES_POST,
} from "../../constants/actionTypes";
import api from "../../constants/api";
import { getAuthToken } from "../../utils/";

export const getAll = () => {
  return async (dispatch) => {
    dispatch({
      type: CHALLENGES_GET_ALL.REQUEST,
    });

    try {
      const { data } = await axios.get(api.challenges(), { ...getAuthToken() });

      dispatch({
        type: CHALLENGES_GET_ALL.SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: CHALLENGES_GET_ALL.FAILURE,
      });
    }
  };
};

export const getById = ({ id }) => {
  return async (dispatch) => {
    dispatch({
      type: CHALLENGES_GET.REQUEST,
    });

    try {
      const { data } = await axios.get(api.challenge(id), {
        ...getAuthToken(),
      });

      dispatch({
        type: CHALLENGES_GET.SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: CHALLENGES_GET.FAILURE,
      });
    }
  };
};

export const postById = ({ id, color = null }) => {
  return async (dispatch) => {
    dispatch({
      type: CHALLENGES_POST.REQUEST,
    });

    try {
      const { data } = await axios.post(
        api.challenge(id),
        { color: color?.toString() },
        {
          ...getAuthToken(),
        }
      );

      dispatch({
        type: CHALLENGES_POST.SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: CHALLENGES_POST.FAILURE,
      });
    }
  };
};
