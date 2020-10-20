import {
  CHALLENGES_GET_ALL,
  CHALLENGES_GET,
  CHALLENGES_POST,
} from "../../constants/actionTypes";

const initialState = {
  list: [],
  item: null,
  matrix: null,
  state: {
    matrix: null,
    color: 0,
    percentage: 0,
    round: 0,
  },
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHALLENGES_GET_ALL.REQUEST:
    case CHALLENGES_GET.REQUEST:
    case CHALLENGES_POST.REQUEST:
      return { ...state, loading: true };

    case CHALLENGES_GET_ALL.SUCCESS:
      return { ...state, loading: false, list: payload };

    case CHALLENGES_GET.SUCCESS:
      const { matrix, ...rest } = payload;
      return { ...state, loading: false, matrix, item: rest };

    case CHALLENGES_POST.SUCCESS:
      return { ...state, loading: false, state: payload };

    case CHALLENGES_GET_ALL.FAILURE:
    case CHALLENGES_GET.FAILURE:
    case CHALLENGES_POST.FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
