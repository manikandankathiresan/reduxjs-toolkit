import * as actionType from "../../action-types/users";

export const getUsers = () => {
  return {
    type: actionType.USER_REQUEST,
    payload: "",
  };
};

export const getUsersFailure = (payload) => {
  return {
    type: actionType.USER_REQUEST_FAILURE,
    payload: payload,
  };
};

export const getUsersResponse = (payload) => {
  return {
    type: actionType.USER_RESPONE,
    payload: payload,
  };
};
