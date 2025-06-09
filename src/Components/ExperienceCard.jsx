import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ year, title, role, description, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="row mb-4"
    >
      <div className="col-12 d-flex flex-column flex-md-row align-items-center p-4 shadow-box text-white rounded-4">
        {/* Image on the top for mobile, left for desktop */}
        <div className="col-12 col-md-3 card-img-container overflow-hidden mb-3 mb-md-0">
          <img
            src={imageSrc}
            alt="App Screenshot"
            className="img-fluid rounded-3 w-100 zoom-on-hover"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              backgroundColor: "#000",
            }}
          />
        </div>

        {/* Content in the middle */}
        <div className="col-12 col-md-7 text-start p-3">
          <span className="text-secondary small">{year}</span>
          <h2 className="h5 fw-bold">{title}</h2>
          <p className="h6">{role}</p>
          <p className="text-secondary">{description}</p>
        </div>

        {/* Button on the bottom for mobile, right for desktop */}
        <div className="col-12 col-md-2 text-center text-md-end">
          <a href="/contact" className="button mt-3 w-100 text-decoration-none">
            CONTACT ME
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
