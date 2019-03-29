import React, { useState } from "react";

export default () => {
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
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
