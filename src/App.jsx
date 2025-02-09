import React, { useState } from "react";
import './App.css';
import faqData from "./data/faqData";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0]?.menu || null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar onSelectCategory={handleCategorySelect} />
        <Faq selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
