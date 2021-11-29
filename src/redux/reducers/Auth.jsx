import { LOGIN } from "../actions/ActionType";

const initial = true;

export const AuthReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload === true ? false : true;
    default:
      return state;
  }
};
