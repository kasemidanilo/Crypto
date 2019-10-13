import { GET_DATA, FAILED_TO_LOAD_DATA } from "../constants/action-types";

const initialState = {
  data: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_DATA) {
    return Object.assign({}, state, {
      data: action.payload
    });
  }
  if (action.type === FAILED_TO_LOAD_DATA) {
    return Object.assign({}, state, {
      data: action.payload
    });
  }
  return state;
}

export default rootReducer;
