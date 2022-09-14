import produce from "immer";
import * as actionTypes from "../../action-types/auth";

const initialState = {
  isAuth: false,
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return produce(prevState, (nextState) => {
        nextState.isAuth = true;
      });
    case actionTypes.LOGOUT:
      return produce(prevState, (nextState) => {
        nextState.isAuth = false;
      });
    default:
      return prevState;
  }
};
