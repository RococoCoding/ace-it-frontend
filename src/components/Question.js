import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Question.css";

function Question() {
  const [question, setQuestion] = useState("");
  const [reload, setReload] = useState(false);

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
      <h3>{question}
        <img onClick={()=>setReload(!reload)}src="assets/refresh.png" className="reload" alt="reload icon" />
      </h3>
      <img src="assets/Dog-Interviewer.jpg" alt="dog with glasses sitting at a desk in front of a laptop" />
    </div>
  );
}

export default Question;
