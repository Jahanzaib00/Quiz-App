import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./AppProvider";
import "./App.css";
const QuizQuestion = ({ correct_answer, incorrect_answers, question }) => {
  const { submitScore } = useGlobalContext();
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmit = (selected_option) => {
    setIsClicked(true);
    if (selected_option === correct_answer) {
      submitScore(1);
    } else {
      submitScore(0);
    }
  };

  const options = [correct_answer, ...incorrect_answers];
  return (
    <div className="my-5">
      <h1 className="text-center">Q: {question}</h1>
      {options.map((option) => {
        return (
          <div className="text-center my-3">
            <button
              className={`btn ${
                isClicked && option === correct_answer && "correct"
              }
                ${isClicked && option !== correct_answer && "incorrect"}`}
              onClick={() => handleSubmit(option)}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default QuizQuestion;
