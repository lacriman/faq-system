import React, { useState } from "react";
import './App.css';
import faqData from "./data/faqData";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Sidebar from "./components/Sidebar";
import FaqSearch from "./components/FaqSearch";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0]?.menu || null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedQuestionId(null);
  };

  const handleSelectQuestion = (category, questionId) => {
    setSelectedCategory(category);
    setSelectedQuestionId(questionId);
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="left-section">
          <Sidebar onSelectCategory={handleCategorySelect} />
          <FaqSearch onSelectQuestion={handleSelectQuestion} />
        </div>
        <Faq selectedCategory={selectedCategory} selectedQuestionId={selectedQuestionId} />
      </div>
    </div>
  );
}

export default App;