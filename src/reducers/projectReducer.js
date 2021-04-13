import _ from "lodash";
import { FETCH_PROJECTS, FETCH_PROJECT } from "../actions/types";

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default projectReducer;
