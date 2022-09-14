import * as actionType from "../../action-types/users";
import produce from "immer";

const initialState = {
  isFetching: false,
  usersResponse: [],
  error: "",
};
export const usersReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionType.USER_REQUEST:
      return produce(prevState, (nextState) => {
        nextState.isFetching = true;
      });
    case actionType.USER_REQUEST_FAILURE:
      return produce(prevState, (nextState) => {
        nextState.isFetching = false;
        nextState.error = action.payload;
      });
    case actionType.USER_RESPONE:
      return produce(prevState, (nextState) => {
        nextState.isFetching = false;
        nextState.usersResponse = action.payload;
      });
    default:
      return produce(prevState, (nextState) => {
        if (prevState.usersResponse.length === 0) {
          nextState.isFetching = initialState.isFetching;
          nextState.usersResponse = initialState.usersResponse;
        }
      });
  }
};
