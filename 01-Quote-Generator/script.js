document.addEventListener("DOMContentLoaded", () => {
  let apiQuotes = [];
  const fallbackQuotes = localQuots || [];

  // DOM Elements
  const loader = document.getElementById("loader");
  const quoteContainer = document.getElementById("quote-container");
  const twitter = document.getElementById("twitter");
  const newQuoteButton = document.getElementById("new-quote");
  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");

  // Fetch quotes from API
  async function getQuotes() {
    const apiUrl =
      "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      console.error(`Error fetching quotes: ${error}`);
      // Fallback to local quotes if API fails
      if (fallbackQuotes.length > 0) {
        newQuoteFallback();
      } else {
        alert("No quotes available.");
      }
    }
  }

  // Function to get a new quote from API
  function newQuote() {
    if (apiQuotes.length === 0) {
      alert("No quotes available");
      return;
    }
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    updateQuoteInDom(quote);
  }

  // Function to get a new quote from local quotes
  function newQuoteFallback() {
    if (fallbackQuotes.length === 0) {
      alert("No quotes available");
      return;
    }
    const quote =
      fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    updateQuoteInDom(quote);
  }

  // Function to update quote text and author in the DOM
  function updateQuoteInDom(quote) {
    const text = quote.text;
    const author = quote.author || "Unknown";
    const textLength = text.length;

    // Update quote text and author in the DOM
    quoteText.textContent = text;
    if (author === "Anonymous") {
      quoteAuthor.textContent = "Unknown";
    } else {
      quoteAuthor.textContent = author;
    }
    // Adjust text length for styling
    if (textLength > 140) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
  }

  // Event listeners

  getQuotes();

  // Generate New Quote
  newQuoteButton.addEventListener("click", () => {
    if (apiQuotes.length > 0) {
      newQuote();
    } else {
      newQuoteFallback();
    }
  });

  // Tweet Quote
  twitter.addEventListener("click", function tweetQuote() {
    const text = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )} - ${encodeURIComponent(author)}`;
    window.open(twitterUrl, "_blank");
  });
});
