import React, { useState } from "react";
import './Faq.css';
import faqData from "../data/faqData";

function Faq({ selectedCategory }) {
   const [expandedQuestionId, setExpandedQuestionId] = useState(null);
   const [activeCategory, setActiveCategory] = useState(faqData[0]?.menu)

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
      selectedCategory(category);
   };

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
                     <div
                        key={question.id}
                        className="faq-item"
                        onClick={(event) => handleQuestionClick(event, question.id)}
                     >
                        <div className="faq-question">
                           <img
                              src={expandedQuestionId === question.id ? '/assets/btn_minus.png' : '/assets/btn_plus.png'}
                              alt="faq-icon"
                              className="faq-icon"
                           />
                           {question.frage}
                        </div>

                        {/* Show answer if the question is expanded */}
                        {expandedQuestionId === question.id && (
                           <div className="faq-answer">
                              <div dangerouslySetInnerHTML={{ __html: question.antwort }} />
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            ))}
      </div>
   );
};

export default Faq;

