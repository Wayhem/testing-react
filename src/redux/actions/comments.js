import * as types from "../types/comments";

export const saveComment = payload => ({
  type: types.SAVE_COMMENT,
  payload
});
