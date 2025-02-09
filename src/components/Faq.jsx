import React, { useState } from "react";
import './Faq.css';
import faqData from "../data/faqData";
import AccordionItem from "./AccordionItem";

function Faq({ selectedCategory }) {
   const [expandedQuestionId, setExpandedQuestionId] = useState(null);

   const handleQuestionClick = (event, questionId) => {
      // Check if text is being selected. If text is selected, we don't want to toggle the question
      if (window.getSelection().toString().length > 0) {
         return;
      }

      // Prevent the click event from bubbling up (this avoids collapsing when clicking inside the question)
      event.stopPropagation();

      // Toggle the expanded question
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
};

export default Faq;

