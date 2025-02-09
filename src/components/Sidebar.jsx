import React, { useState } from "react";
import './Sidebar.css';
import faqData from "../data/faqData";

function Sidebar({ onSelectCategory }) {
   const [activeCategory, setActiveCategory] = useState(faqData[0]?.menu);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
      onSelectCategory(category);
   };

   return (
      <div className="sidebar">
         <ul className="sidebar-list">
            {faqData.map((category) => (
               <li
                  key={category.menu}
                  className={`sidebar-item ${activeCategory === category.menu ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.menu)}
               >
                  <img
                     src={activeCategory === category.menu ? '/assets/bullet_over.png' : '/assets/bullet.png'}
                     alt="bullet"
                     className="sidebar-bullet"
                  />
                  <a href="#" className="sidebar-link">
                     {category.menu}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Sidebar;