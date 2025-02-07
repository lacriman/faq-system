import React from "react";
import './App.css';
import Header from "./components/Header";
import Faq from "./components/FAQ";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Faq />
      </div>
    </div>
  )
}

export default App;
