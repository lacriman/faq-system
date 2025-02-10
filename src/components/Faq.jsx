import React, { useState, useEffect } from "react";
import './Faq.css';
import faqData from "../data/faqData";
import AccordionItem from "./AccordionItem";

function Faq({ selectedCategory, selectedQuestionId }) {
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  useEffect(() => {
    if (selectedQuestionId) {
      setExpandedQuestionId(selectedQuestionId);
    }
  }, [selectedQuestionId]);

  const handleQuestionClick = (event, questionId) => {
    if (window.getSelection().toString().length > 0) {
      return;
    }
    event.stopPropagation();
    setExpandedQuestionId((prevId) => (prevId === questionId ? null : questionId));
  };

  return (
    <div className="faq-container">
      {faqData
        .filter((category) => !selectedCategory || category.menu === selectedCategory)
        .map((category) => (
          <div key={category.menu} className="faq-category">
            <h2 className="faq-category-title">{category.menu}</h2>
            {category.fragen.map((question) => (
              <AccordionItem
                key={question.id}
                question={question}
                expandedQuestionId={expandedQuestionId}
                onClick={handleQuestionClick}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default Faq;