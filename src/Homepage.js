import React, { useRef } from "react";
import "./Homepage.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppProvider";

const Homepage = () => {
  const { data, submitForm } = useGlobalContext();
  const categoryRef = useRef(null);
  const difficultyRef = useRef(null);
  const typeRef = useRef(null);

  return (
    <>
      <h1 className="text-center">Quiz App</h1>
      <div className="container">
        <div className="input-fields">
          <Form.Select ref={categoryRef}>
            <option>Category</option>
            {data.map((item) => {
              return (
                <>
                  <option>{item.category}</option>
                </>
              );
            })}
          </Form.Select>
        </div>
        <div className="input-fields">
          <Form.Select ref={difficultyRef}>
            <option>Difficulty</option>
            {data.map((item) => {
              return (
                <>
                  <option>{item.difficulty}</option>
                </>
              );
            })}
          </Form.Select>
        </div>
        <div className="input-fields">
          <Form.Select ref={typeRef}>
            <option>Type</option>
            {data.map((item) => {
              return (
                <>
                  <option>{item.type}</option>
                </>
              );
            })}
          </Form.Select>
        </div>
        <div className="text-center w-100">
          <Link to="./disclaimer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() =>
                submitForm({ typeRef, categoryRef, difficultyRef })
              }
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
