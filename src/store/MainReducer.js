import * as actions from "./actions";
import { DestinationsService } from "../services/DestinationsService";

const INITIAL_STATE = {
  userName: "",
  headAnimHeight: null,
  cities: DestinationsService.cities,
  originCity: null,
  destinationCity: null,
};

export default function mainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case actions.SET_ORIGIN_CITY:
      return {
        ...state,
        originCity: action.name,
      };
    case actions.SET_DESTINATION_CITY:
      return {
        ...state,
        destinationCity: action.name,
      };
    default:
      return state;
  }
}
