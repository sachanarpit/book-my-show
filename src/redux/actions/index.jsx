import { LOGIN } from "./ActionType";
export const changeAuth = (x) => {
  return {
    type: LOGIN,
    payload: x,
  };
};
