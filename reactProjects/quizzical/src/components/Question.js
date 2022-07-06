import React from "react";

export default function Question(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      <span>{props.correct_answer}</span>
      <span>{props.incorrect_answers}</span>
    </div>
  );
}
