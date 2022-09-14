import produce from "immer";
import * as actionType from "../../action-types/counter";

const initialState = {
  count: 0,
};

export const counterReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return produce(prevState, (nextState) => {
        nextState.count = prevState.count + 1;
      });
    case actionType.DECRMENT:
      return produce(prevState, (nextState) => {
        nextState.count = prevState.count - 1;
      });
    case actionType.RESET:
      return produce(prevState, (nextState) => {
        nextState.count = 0;
      });
    default:
      return initialState;
  }
};
