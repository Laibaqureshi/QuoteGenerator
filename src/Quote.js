import React from "react";
import "./quote.css";
const Quote = ({ currQuote, change, open }) => {
  return (
    <div className="quote-container" id="quote-container">
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>

        <span id="quote">"{currQuote ? currQuote.text : ""}</span>
      </div>
      <div className="quote-author">
        <span id="author">
          {currQuote ? (currQuote.author ? currQuote.author : "Anonymous") : ""}
        </span>
      </div>
      <div className="button-container">
        <button
          className="twitter-button"
          id="twitter"
          title="Tweet This!"
          onClick={open}
        >
          <i className="fab fa-twitter"></i>
          TweetSSS
        </button>
        <button id="new-quote" onClick={change}>
          New Quote
        </button>
      </div>
    </div>
  );
};
export default Quote;
