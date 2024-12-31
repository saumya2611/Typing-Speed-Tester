import logo from "./logo.svg";
import "./App.css";
import TypingTester from "./Component/TypingTester";
import StartTest from "./Component/StartTest";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      {isActive === true ? (
        <StartTest />
      ) : (
        <TypingTester setIsActive={setIsActive} />
      )}
    </div>
  );
}

export default App;
