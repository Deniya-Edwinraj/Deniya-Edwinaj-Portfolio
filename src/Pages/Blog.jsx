import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { blogData } from "../Constants/Data";
import BlogCard from "../Components/BlogCard";

export default function Blog() {
  return (
    <section id="blog" className="text-light py-5 mt-5">
      <div className="container text-center">
                  <p className="text-danger">Visit my blog and keep your feedback</p>
          <h1 className="display-4 fw-bold">My Blog</h1>
        <div className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
          {blogData.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
