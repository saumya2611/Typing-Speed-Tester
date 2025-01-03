import logo from "./logo.svg";
import "./App.css";
import TypingTester from "./Component/TypingTester";
import StartTest from "./Component/StartTest";
import { useEffect, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   console.log("isActive==========>", isActive);
  // }, [isActive]);

  return (
    <div className="App">
      {isActive === true ? (
        <StartTest />
      ) : (
        <TypingTester isActive={isActive} setIsActive={setIsActive} />
      )}
    </div>
  );
}

export default App;
