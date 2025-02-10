import React, { useState } from "react";
import faqData from "../data/faqData";
import './FaqSearch.css';

function FaqSearch() {
  return (
    <div className="search-container">
      <h2 className="search-title">Suche:</h2>
      <div className="search-content">
        <input type="text" id="search-input" />
        <button id="search-button">
          <img src="/assets/btn_suche.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default FaqSearch;
