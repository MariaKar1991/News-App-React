/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

// NewsBoard component displaying news articles based on the selected category
const NewsBoard = ({ category }) => {
  // State to store the fetched articles
  const [articles, setArticles] = useState([]);

  // Effect to fetch news articles when the category changes
  useEffect(() => {
    // API URL for fetching news based on the selected category
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    // Fetching news data from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      {/* Heading displaying the category and a badge */}
      <h2
        className="text-center"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {/* Container for news articles, using flex-wrap for responsiveness */}
      <div className="d-flex flex-wrap justify-content-center">
        {/* Mapping through the fetched articles and rendering NewsItem component */}
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            src={news.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
