import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/font.css";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Logement from "./pages/logement";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
