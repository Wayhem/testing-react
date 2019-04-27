import React from "react";
import { connect } from "react-redux";
import * as CommentsOperations from "../redux/operations/comments";

const CommentBox = ({ hook, ...props }) => {
  const [comment, setComment] = hook;

  const handleSubmit = e => {
    e.preventDefault();

    const { saveComment } = props;

    saveComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={e => setComment(e.target.value)} />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return { ...state.comments };
};

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(CommentsOperations.saveComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);
