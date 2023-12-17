import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://otterclub.io" target="_blank">
          <img src={"/img/otter_club_logo.png"} className="logo" alt="Otter Club logo" />
        </a>
      </div>
    </>
  );
}

export default App;
