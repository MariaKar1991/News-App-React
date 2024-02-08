/* eslint-disable react/prop-types */
import image from "../assets/news.jpg";

// NewsItem component displaying a single news article
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-flex flex-column align-items-center mb-3 mx-2 py-3"
      style={{ width: "300px", height: "400px" }}
    >
      {/* News image, using a default image if not provided */}
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="News"
        style={{ maxHeight: "200px", maxWidth: "200px" }}
      />

      {/* News details, centered in a flex column */}
      <div className="card-body text-center">
        {/* News title */}
        <h5 className="card-title">{title}</h5>

        {/* News description */}
        <p className="card-text">{description}</p>

        {/* Read more button linking to the article */}
        <a href={url} className="btn btn-success">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
