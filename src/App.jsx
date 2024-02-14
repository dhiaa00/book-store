import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authors from "./pages/authors/authors";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
