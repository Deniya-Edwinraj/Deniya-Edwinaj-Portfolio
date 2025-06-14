import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import { projectData } from "../Constants/Data";

export default function Project() {
  return (
    <section id="projects" className="text-light py-5 mt-5">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-12"
        >
          <p className="text-danger">Visit my projects and keep your feedback</p>
          <h1 className="display-4 fw-bold">My Projects</h1>
          <div className="mt-5 row g-4">
            {projectData.map((card, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex">
                <ProjectCard {...card} className="h-100" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}