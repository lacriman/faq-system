import React from "react";

function AccordionItem({ question, expandedQuestionId, onClick }) {
   return (
      <div
         key={question.id}
         className={`faq-item ${expandedQuestionId === question.id ? 'active' : ''}`}  // Added 'active' class based on expanded state
         onClick={(event) => onClick(event, question.id)}
      >
         <img
            src={expandedQuestionId === question.id ? '/assets/btn_minus.png' : '/assets/btn_plus.png'}
            alt="faq-icon"
            className="faq-icon"
         />

         <div className="faq-content">
            <div className="faq-question">
               {question.frage}
            </div>

            {/* Show answer if the question is expanded */}
            {expandedQuestionId === question.id && (
               <div className="faq-answer">
                  <div dangerouslySetInnerHTML={{ __html: question.antwort }} />
               </div>
            )}
         </div>
      </div>
   );
}

export default AccordionItem;