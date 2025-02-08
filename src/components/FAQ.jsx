import React, { useState } from "react";
import './Faq.css';
import faqData from "../data/faqData";
import Sidebar from "./Sidebar";

function Faq() {
   const [expandedQuestionId, setExpandedQuestionId] = useState(null);
   const [selectedCategory, setSelectedCategory] = useState(null);

   // The handleQuestionClick function toggles the expansion of a question in the FAQ. It checks if the clicked question is already open by comparing its questionId with the current expandedQuestionId. If it's already open, it collapses the question by setting the state to null; if it's not open, it sets the state to the new questionId to expand that question.
   const handleQuestionClick = (questionId) => {
      setExpandedQuestionId((prevId) => (prevId === questionId ? null : questionId));
   };

   const handleCategoryClick = (categoryName) => {
      setSelectedCategory(categoryName);
   };
   
   return (
      <div className="faq-container">

         {faqData.map((category) => (
            <div key={category.menu} className="faq-category">
               <h2 className="faq-category-title">{category.menu}</h2>
               {category.fragen.map((question) => (
                  <div key={question.id} className="faq-item">
                     <div className="faq-question" onClick={() => handleQuestionClick(question.id)}>
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

