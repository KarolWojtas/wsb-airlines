import * as actions from "./actions";

export function setUserName(userName) {
  return {
    type: actions.SET_USER_NAME,
    userName,
  };
}
