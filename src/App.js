import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Quiz from "./Quiz";
import Disclaimer from "./Disclaimer";
import Timeout from "./Timeout";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/timeout" element={<Timeout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
