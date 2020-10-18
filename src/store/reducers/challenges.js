import { CHALLENGES_GET_ALL } from "../../constants/actionTypes";

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHALLENGES_GET_ALL.REQUEST:
      return { ...state, loading: true };

    case CHALLENGES_GET_ALL.SUCCESS:
      return { ...state, loading: false, list: payload };

    case CHALLENGES_GET_ALL.FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
