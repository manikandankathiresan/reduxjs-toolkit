import * as actionTypes from "../../action-types/counter";

// action
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: actionTypes.DECRMENT
  };
};
export const reset = () => {
  return {
    type: actionTypes.RESET
  };
};
