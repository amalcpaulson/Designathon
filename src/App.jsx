import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Designathon from "./Components/Designathon/Designathon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Designathon />
    </>
  );
}

export default App;
