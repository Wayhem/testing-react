import React from "react";

export default ({ hook }) => {
  const [comment, setComment] = hook;

  const handleSubmit = e => {
    e.preventDefault();
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
