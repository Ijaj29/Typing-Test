import "./App.css";
import Alphabet from "./components/Alphabet";
import Home from "./components/Home";
import EndTyping from "./components/EndTyping";
import StartTyping from "./components/StartTyping";
import React, { useEffect, useState } from "react";

function App() {
  const [statusTyping, setStatusTyping] = useState(null);
  const [score, setScore] = useState({
    count: 0,
    accuracy: 0,
    wrong: 0,
  });

  const handleChangeStatusTyping = (status = "start") => {
    setStatusTyping(status);
  };

  let showMain;
  switch (statusTyping) {
    case "start":
      showMain = (
        <StartTyping
          onGame={handleChangeStatusTyping}
          onChangeScore={setScore}
        />
      );
      break;
    case "endTyping":
      showMain = <EndTyping onGame={handleChangeStatusTyping} score={score} />;
      break;
    default:
      showMain = <Home onGame={handleChangeStatusTyping} />;
      break;
  }

  // useEffect(() => {
  //   if (statusTyping === "start") {
  //     // run timeout 60s end game
  //     const timeOutTyping = setTimeout(() => {
  //       setStatusTyping("endTyping");
  //     }, 60000);
  //     return () => clearTimeout(timeOutTyping);
  //   }
  // }, [statusTyping]);

  return (
    <>
      <div className="App">{showMain}</div>
    </>
  );
}

export default App;
