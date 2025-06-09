import React from "react";

const ProjectCard = ({
  image,
  category,
  technology,
  description,
  title,
  url,
}) => {
  return (
    <div className="card bg-dark text-light border-0 rounded-4 shadow-box p-3">
      <div className="card-img-container overflow-hidden rounded-3">
        <img
          src={image}
          className="card-img-top w-100 zoom-on-hover"
          alt={title}
          style={{ height: "250px", objectFit: "cover" }} // Ensures the image maintains aspect ratio
        />
      </div>
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center mb-2 small">
          <span className="text-danger fw-bold">{category.toUpperCase()}</span>
          <span className="text-secondary d-flex gap-2">
            <i className="bi bi-github hover-text"></i>
            <i className="bi bi-heart-fill hover-text"></i>
          </span>
        </div>
        <h5 className="card-title fw-semibold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none hover-text"
          >
            {title} <i className="bi bi-link-45deg"></i>
          </a>
        </h5>
        <h6 className="card-title text-secondary">{technology}</h6>
        <p className="card-description text-light">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
