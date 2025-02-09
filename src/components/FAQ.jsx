import React, { useState } from "react";
import './Faq.css';
import faqData from "../data/faqData";

function Faq({ selectedCategory }) {
   const [expandedQuestionId, setExpandedQuestionId] = useState(null);

   const handleQuestionClick = (questionId) => {
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
                     <div key={question.id} className="faq-item">
                        <div
                           className="faq-question"
                           onClick={() => handleQuestionClick(question.id)}
                        >
                           {question.frage}
                        </div>
                     </div>
                  ))}
               </div>
            ))}
      </div>
   );
};

export default Faq;

