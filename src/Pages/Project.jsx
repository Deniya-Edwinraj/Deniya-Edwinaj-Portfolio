import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import { projectData } from "../Constants/Data";

export default function Project() {
  return (
    <section id="projects" className="text-light py-5 mt-5">
      <div className="container text-center">
        <p className="text-danger">Visit my projects and keep your feedback</p>
        <h1 className="display-4 fw-bold">My Projects</h1>
        <div className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
          {projectData.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
