import { useState } from "react";

export default (initialValue = "") => {
  const [comment, setComment] = useState(initialValue);

  return [comment, setComment];
};
