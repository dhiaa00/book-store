import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Props from "./components/props/Props";
import { books } from "./data/books";
import BookSlider from "./components/bookSlider/BookSlider";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Slider />
      <Props />
      <BookSlider title="Most Gifted" booksList={books} />
      <BookSlider title="Best Seller" booksList={books} />
      <BookSlider title="Most Wished For" booksList={books} />
    </>
  );
}

export default App;
