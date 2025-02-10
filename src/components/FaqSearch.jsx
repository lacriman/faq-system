import React, { useState } from "react";
import faqData from "../data/faqData";
import './FaqSearch.css';

function FaqSearch({ onSelectQuestion }) { 
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const filterQuestions = () => {
    const filteredQuestions = [];
    faqData.forEach(category => {
      category.fragen.forEach(question => {
        if (question.frage.toLowerCase().includes(searchTerm.toLowerCase())) {
          filteredQuestions.push({ ...question, category: category.menu }); 
        }
      });
    });
    return filteredQuestions.slice(0, 6);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSuggestions(filterQuestions());
  };

  const handleSearch = () => {
    if (suggestions.length > 0) {
      const firstSuggestion = suggestions[0];
      onSelectQuestion(firstSuggestion.category, firstSuggestion.id); 
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (category, questionId) => {
    onSelectQuestion(category, questionId);
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
          <img src="/assets/btn_suche.png" alt="search button" />
        </button>
      </div>
      
      {searchTerm && (
        <div className="suggestions">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion.category, suggestion.id)}  
              >
                {suggestion.frage}
              </div>
            ))
          ) : (
            <div>No suggestions found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default FaqSearch;