import * as types from "../types/comments";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_COMMENT:
      return { ...state, list: [...state.list, action.payload] };

    default:
      return state;
  }
};
