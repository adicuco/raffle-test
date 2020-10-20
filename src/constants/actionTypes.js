import { createAsyncTypes } from "../utils";

export const AUTH_LOGIN = createAsyncTypes("AUTH_LOGIN");
export const AUTH_REGISTER = createAsyncTypes("AUTH_REGISTER");

export const CHALLENGES_GET_ALL = createAsyncTypes("CHALLENGES_GET_ALL");
export const CHALLENGES_GET = createAsyncTypes("CHALLENGES_GET");
export const CHALLENGES_POST = createAsyncTypes("CHALLENGES_POST");