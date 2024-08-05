import React from "react";
import { useRef } from "react";

export default function Quiz(props) {
  console.log("Quiz component rendered");

  return (
    <div className="quiz-container">
      <h1>{props.question}</h1>
      <div className="options-container" id={props.id}>
        {props.options.map((opt, index) => {
          return (
            <label key={index} className="label-styles">
              <input
                type="radio"
                name={props.id}
                onChange={props.handleChange}
                value={opt}
                required
                className="option"
              />
              {opt}
            </label>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
