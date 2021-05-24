// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
function App() {
  const [currQuote, setCurrQuote] = useState(null);
  const url = "https://type.fit/api/quotes";
  const [apiQuotes, setApiQuotes] = useState([]);
  //  const [author,setAuthor]=useState(null);

  const change = () => {
    setCurrQuote(apiQuotes[Math.floor(Math.random() * 1643)]);
  };
  const open = () => {
    console.log(currQuote.text);
    console.log(currQuote.author);

    const twitterUrl = `https://twitter.com/intent/tweet?text=${currQuote.text} - ${currQuote.author}`;
    console.log(twitterUrl);
    console.log("hi");
    window.open(twitterUrl, "_blank");
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      //  console.log(response);
      // console.log(response.data[99].text);
      setApiQuotes(response.data);

      setCurrQuote(response.data[Math.floor(Math.random() * 1643)]);
    });
  }, []);

  return (
    <div className="quoteWrapper">
      <Quote currQuote={currQuote} change={change} open={open} />
    </div>
  );
}
export default App;
