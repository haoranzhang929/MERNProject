import { GET_ERRS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRS:
      return action.payload;
    default:
      return state;
  }
}
