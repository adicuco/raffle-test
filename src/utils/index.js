import { ASYNC_TYPES } from "../constants";

export const createAsyncTypes = (action) =>
  Object.values(ASYNC_TYPES).reduce((acc, curr) => {
    acc[curr] = `${action}_${curr}`;
    return acc;
  }, {});
