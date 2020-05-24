const INITIAL_STATE = {
  counter: 1,
};

export default function mainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
