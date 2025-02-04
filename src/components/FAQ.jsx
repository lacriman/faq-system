import React from "react";
import faqData from "../data/faqData"

function Faq() {
   return (
      <div>
         <h1>Frequently Asked Questions</h1>
         {faqData.map((category) => (
            <div key={category.menu}>
               <h2>{category.menu}</h2>
               {category.fragen.map((item) => (
                  <div key={item.id}>
                     <p><strong>Q: {item.frage}</strong></p>
                     <p>A: {item.antwort}</p>
                  </div> 
               ))}
            </div>
         ))}
      </div>
   );
};

export default Faq