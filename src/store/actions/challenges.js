import axios from "axios";

import { CHALLENGES_GET_ALL } from "../../constants/actionTypes";
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
