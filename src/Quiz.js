import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import Timeout from "./Timeout";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppProvider";

const Quiz = () => {
  const { category, type, difficulty, data } = useGlobalContext();
  const [questions, setQuestions] = useState(data);
  const [time, setTime] = useState(20);
  useEffect(() => {
    const ques = data.filter(
      (item) =>
        item.category === category &&
        item.type === type &&
        item.difficulty === difficulty
    );
    setQuestions(ques);
  }, []);
  useEffect(() => {
    setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  if (time < 0) {
    return <Timeout />;
  } else {
    return (
      <>
        <h5
          className="text-right my-3"
          style={{ position: "sticky", top: "0" }}
        >
          {time} seconds left
        </h5>
        <div>
          {data.map((item) => {
            return (
              <>
                <QuizQuestion {...item} />
              </>
            );
          })}
        </div>
        <div className="text-center my-4">
          <Link to="/timeout">
            <button className="btn btn-primary">Submit</button>
          </Link>
        </div>
      </>
    );
  }
};

export default Quiz;
