import * as actions from "./actions";

export function setUserName(userName) {
  return {
    type: actions.SET_USER_NAME,
    userName,
  };
}

export function setOriginCity(name) {
  return {
    type: actions.SET_ORIGIN_CITY,
    name,
  };
}

export function setDestinationCity(name) {
  return {
    type: actions.SET_DESTINATION_CITY,
    name,
  };
}
