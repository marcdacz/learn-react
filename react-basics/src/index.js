import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

ReactDOM.render(
  <div>
    <NavBar />
    <MainContent />
    <Footer />
  </div>,
  document.getElementById("root")
);
