import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = ["Education", "Professional Skills", "Experience", "Certifications"];
  return (
    <section id="resume" className="text-light py-5 mt-5">
      <div className="container">
        <div className="row py-5 d-flex justify-content-center align-items-center text-center">
          <h1 className="display-4 fw-bold">My Resume</h1>
          <div
            className="bg-danger"
            style={{ width: "60px", height: "4px" }}
          ></div>

          <div className="mt-5">
            <div className="col-12 d-flex align-items-center p-4 shadow-box text-white rounded-4">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-4 text-center fw-semibold tab-item 
            ${activeTab === tab ? "text-danger" : "text-light"}`}
                  style={{ cursor: "pointer", flex: 1 }}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
