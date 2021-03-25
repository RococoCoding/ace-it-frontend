import React, { useEffect, useState, useContext } from "react";
import { ReloadContext } from "../context/context";
import axios from "axios";

import "./Question.css";

function Question(props) {
  const [question, setQuestion] = useState("");
  const { reload } = useContext(ReloadContext);
  const { setReload } = props;

  useEffect(() => {
    axios.get("https://ace-the-interview.herokuapp.com/questions/random")
      .then(res => {
        setQuestion(res.data.questions);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [reload]);

  return (
    <div className="question-container">
      {question ? 
      <h3>{question}
        <img onClick={() => setReload(!reload)} src="assets/refresh.png" className="reload" alt="reload icon" />
      </h3>
      :
      <p>Loading question...</p>
      }
      <img src="assets/Dog-Interviewer.jpg" alt="dog with glasses sitting at a desk in front of a laptop" />
    </div>
  );
}

export default Question;
