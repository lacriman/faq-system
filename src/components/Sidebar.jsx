import React from "react";
import faqData from "../data/faqData";
import './Sidebar.css';

function Sidebar({ onSelectCategory }) {
   return (
      <div className="sidebar">
         <ul className="sidebar-list">
            {faqData.map((category) => (
               <li
                  key={category.menu}
                  className="sidebar-item"
                  onClick={() => onSelectCategory(category.menu)}
               >
                  <img src="../assets/bullet.png" alt="" />
                  <a href="#" className="sidebar-link">{category.menu}</a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Sidebar;