import * as actionTypes from "../../action-types/auth";

export const login = () => {
  return {
    type: actionTypes.LOGIN
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};
