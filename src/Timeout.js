import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppProvider";
const Timeout = () => {
  const { score, reset } = useGlobalContext();
  return (
    <div className="text-center">
      <h3>Your Score is: {score}</h3>
      <Link to="/">
        <button className="btn btn-primary" onClick={() => reset()}>
          Go Back TO Home
        </button>
      </Link>
    </div>
  );
};

export default Timeout;
