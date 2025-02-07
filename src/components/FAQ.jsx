import React from "react";
import './FAQ.css';
import faqData from "../data/faqData";

function Faq() {
   return (
      <div className="faq-container">

         {faqData.map((category) => (
            <div key={category.menu} className="faq-category">
               <h2 className="faq-category-title">{category.menu}</h2>
               {category.fragen.map((item) => (
                  <div key={item.id} className="faq-item">
                     <p className="faq-question"><strong>{item.frage}</strong></p>
                     <p className="faq-answer">{item.antwort}</p>
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default Faq;