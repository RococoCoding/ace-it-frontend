import React, { useState, useEffect, useContext } from "react";
import WebcamStreamCapture from "./record";
import Timer from "./Timer";
import "./Webcam.css";

import { ReloadContext } from "../context/context";

function Video() {
  const [record, setRecord] = useState(false);
  const { reload } = useContext(ReloadContext);

  useEffect(() => {
    setRecord(false);
  }, [reload]);

  function startRecord() {
    setRecord(true);
  }

  return (
    <div className="video-wrapper">
      <Timer />
      {record ?
        <WebcamStreamCapture />
        :
        <div>
          <button className="start-webcam" onClick={startRecord}>Start Webcam</button>
          <p className="webm-warning">
            {!record ? "Webcam recording saves as a .webm file." : ""}
          </p>
        </div>
      }
    </div>
  );
};

export default Video;
