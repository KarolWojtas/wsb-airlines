import * as actions from "./actions";

const INITIAL_STATE = {
  userName: "",
  headAnimHeight: null,
};

export default function mainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
}
