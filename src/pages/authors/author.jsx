import React from "react";

const Author = ({ author }) => {
  return (
    <div className="author">
      <img src={author.image} alt="author" />
      <h2>{author.name}</h2>
    </div>
  );
};

export default Author;
