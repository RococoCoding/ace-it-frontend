import React from "react";
import Question from "./components/Question";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Ace the Interview</h1>
      </header>
      <Question />
      <Footer />
    </main>
  );
}

export default App;
