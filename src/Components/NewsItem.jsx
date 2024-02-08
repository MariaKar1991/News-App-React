/* eslint-disable react/prop-types */
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-flex flex-column align-items-center mb-3 mx-2 py-3"
      style={{ width: "300px", height: "400px" }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="News"
        style={{ maxHeight: "200px", maxWidth: "200px" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-success">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
