import React from "react";
import faqData from "../data/faqData";
import './Sidebar.css';

function Sidebar() {
   return (
      <div className="sidebar">
         <ul className="sidebar-list">
            {faqData.map((category) => (
               <li key={category.menu} className="sidebar-item">
                  <a href="#" className="sidebar-link">{category.menu}</a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Sidebar;