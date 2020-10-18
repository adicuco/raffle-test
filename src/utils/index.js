import { ASYNC_TYPES, JWT_TOKEN_KEY } from "../constants";
import { localStorageGetItem } from "./storage";

export const createAsyncTypes = (action) =>
  Object.values(ASYNC_TYPES).reduce((acc, curr) => {
    acc[curr] = `${action}_${curr}`;
    return acc;
  }, {});

export const getAuthToken = () => {
  const token = localStorageGetItem(JWT_TOKEN_KEY);
  return {
    headers: {
      "x-auth-token": token,
    },
  };
};
