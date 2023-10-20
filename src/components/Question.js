import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Question.css";
import Video from "./Webcam";

function Question() {
  const [question, setQuestion] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/questions/random`)
      .then(res => {
        setQuestion(res.data.questions);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [reload]);

  return (
    <div className="question-container">
      <h3>{question}
        <img onClick={() => setReload(!reload)} src="assets/refresh.png" className="reload" alt="reload icon" />
      </h3>
      {/* <Video /> */}
      <img src="assets/Dog-Interviewer.jpg" alt="dog with glasses sitting at a desk in front of a laptop" />
    </div>
  );
}

export default Question;
