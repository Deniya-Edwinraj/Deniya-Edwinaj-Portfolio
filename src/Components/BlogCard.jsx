import React from "react";
import fallbackImage from "../assets/Images/6.png"; // make sure the path is correct

const BlogCard = ({ image, category, time, title }) => {
  return (
    <div className="card col-md-3 bg-dark text-light border-0 rounded-4 shadow-box p-3">
      <div className="card-img-container overflow-hidden rounded-3">
        <img
          src={image}
          className="card-img-top w-100 zoom-on-hover"
          alt={title}
          style={{ height: "250px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null; // prevents looping if fallback also fails
            e.target.src = fallbackImage;
          }}
        />
      </div>
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center mb-2 small">
          <span className="text-danger fw-bold">{category.toUpperCase()}</span>
          <span className="text-secondary">
            <i className="bi bi-clock"></i> {time}
          </span>
        </div>
        <h5 className="card-title fw-semibold">{title}</h5>
      </div>
    </div>
  );
};

export default BlogCard;
