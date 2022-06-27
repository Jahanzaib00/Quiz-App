import React from "react";
import { Link } from "react-router-dom";
const Disclaimer = () => {
  return (
    <div className="text-center my-5">
      <h4>
        Once you click start, You will have 20 seconds to complete the quiz
      </h4>
      <Link to="/quiz">
        <div className="text-center my-5">
          <button className="btn btn-primary">Start</button>
        </div>
      </Link>
    </div>
  );
};

export default Disclaimer;
