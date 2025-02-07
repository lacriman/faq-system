import React from "react";
import './App.css';
import Faq from "./components/FAQ";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Faq />
    </div>
  )
}

export default App;
