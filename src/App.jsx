import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Slider />
    </>
  );
}

export default App;
