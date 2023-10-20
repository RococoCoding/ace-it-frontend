import React, { useState } from "react";
import Question from "./components/Question";
import Video from "./components/Webcam";
import Footer from "./components/Footer";
import { ReloadContext } from "./context/context";

import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload: reload }}>
      <div className="App">
        <header>
          <h1>Ace the Interview</h1>
        </header>
        <main>
          <Question setReload={setReload} />
          <Video />
        </main>
        <Footer />
      </div>
    </ReloadContext.Provider>
  );
}

export default App;
