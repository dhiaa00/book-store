import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <BrowserRouter>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
