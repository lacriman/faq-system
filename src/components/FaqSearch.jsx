import React, { useState } from "react";
import faqData from "../data/faqData";
import './FaqSearch.css';

function FaqSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    // event.target.value gives you the current value of the input field.
    // setSearchTerm() updates the state with the new value.
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <label htmlFor="search-input" className="search-title">Suche:</label>
      <div className="search-content">
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch} id="search-button">
          <img src="/assets/btn_suche.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default FaqSearch;
