import * as CommentActions from "../actions/comments";

export const saveComment = comment => (dispatch, getState) =>
  dispatch(CommentActions.saveComment(comment));
