import React from "react";

const RandomPhrase = ({ quote }) => {
  const {} = quote;

  const { author, phrase } = quote;

  return (
    <div className="phraseAuthor">
      <p> {phrase} </p>
      <p> Autor: {author} </p>
    </div>
  );
};

export default RandomPhrase;
