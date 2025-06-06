import React from 'react';

const BlogCard = ({ image, category, time, title }) => {
  return (
    <div className="card col-md-3 bg-dark text-light border-0 rounded-4 shadow p-3">
      <img src={image} className="card-img-top rounded-3 w-100" alt={title} style={{height: '250px'}} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2 small">
          <span className="text-danger fw-bold">{category.toUpperCase()}</span>
          <span className="text-secondary"><i className="bi bi-clock"></i> {time}</span>
        </div>
        <h5 className="card-title fw-semibold">{title}</h5>
      </div>
    </div>
  );
};

export default BlogCard;
