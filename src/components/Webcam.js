import React, { useState } from "react";
import Webcam from "react-webcam";
import WebcamStreamCapture from "./record";

function Video() {
  const [record, setRecord] = useState(false);

  function startRecord() {
    setRecord(true);
  }

  return (
    <>
      {record ?
        <WebcamStreamCapture />
        :
        <button onClick={startRecord}>Record webcam</button>
      }

    </>
  );
};

export default Video;
