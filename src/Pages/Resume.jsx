import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { educationtimelineData, experienceData, Sskills, Tskills } from "../Constants/Data";

const API_KEY = "AIzaSyBv2Ktmv1ozdJKCcCIB1nOEhlAKVajfE6w";
const ROOT_FOLDER_ID = "1r2BeGq7IZD_CE9bLwQ1D7dsSI9xLuNLu";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Education");
  const [certificates, setCertificates] = useState([]);

  const tabs = [
    "Education",
    "Professional Skills",
    "Experience",
    "Certifications",
  ];

  // Fetch files recursively from Google Drive
  useEffect(() => {
    const fetchFiles = async (folderId) => {
      const res = await axios.get("https://www.googleapis.com/drive/v3/files", {
        params: {
          q: `'${folderId}' in parents and trashed = false`,
          fields: "files(id, name, mimeType)",
          key: API_KEY,
        },
      });

      const files = [];

      for (const file of res.data.files) {
        if (file.mimeType === "application/vnd.google-apps.folder") {
          const subFiles = await fetchFiles(file.id);
          files.push(...subFiles);
        } else if (
          file.mimeType.startsWith("image/") ||
          file.mimeType === "application/pdf"
        ) {
          files.push(file);
        }
      }

      return files;
    };

    const getDrivePreview = (file) => {
      if (file.mimeType === "application/pdf") {
        return `https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${file.id}`;
      } else if (file.mimeType.startsWith("image/")) {
        return `https://drive.google.com/uc?export=view&id=${file.id}`;
      } else {
        return null;
      }
    };

    const loadCertificates = async () => {
      const allFiles = await fetchFiles(ROOT_FOLDER_ID);

      const previewableFiles = await Promise.all(
        allFiles.map(async (file) => {
          const previewUrl = getDrivePreview(file);

          if (file.mimeType.startsWith("image/")) {
            try {
              const res = await fetch(previewUrl, { method: "HEAD" });
              const contentType = res.headers.get("content-type");
              if (!res.ok || contentType?.startsWith("text/html")) {
                return null; // Skip broken or restricted preview
              }
            } catch {
              return null; // Skip on network error
            }
          }

          return file; // PDF or valid image
        })
      );

      setCertificates(previewableFiles.filter(Boolean)); // Remove nulls
    };

    loadCertificates();
  }, []);

  // Get correct image preview URL
  const getDrivePreview = (file) => {
    if (file.mimeType === "application/pdf") {
      return `https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${file.id}`;
    } else if (file.mimeType.startsWith("image/")) {
      return `https://drive.google.com/uc?export=view&id=${file.id}`;
    } else {
      return "https://via.placeholder.com/250x180?text=No+Preview";
    }
  };

  return (
    <section id="resume" className="text-light py-5 mt-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 100, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-md-12"
        >
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

          {/* Show education only on that tab */}
          {activeTab === "Education" && (
            <div className="row position-relative">
              <h6 className="text-danger fw-bold">2018 - Present</h6>
              <h2 className="fw-bold mb-4">Education</h2>
              <div className="row">
                <div className="col-md-6">
                  <ul className="timeline position-relative my-0 mx-auto py-2 list-unstyled">
                    {educationtimelineData
                      .slice(0, Math.ceil(educationtimelineData.length / 2))
                      .map((item, index) => (
                        <li key={index} className="py-3">
                          <div className="direction-r position-relative">
                            <div className="card bg-dark mb-4 text-white">
                              <span className="flag position-relative d-inline rounded"></span>
                              <div className="card-body position-relative rounded-3 p-3 shadow-box mx-3">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-secondary small">
                                  {item.job}
                                </p>
                                <p className="card-text">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="timeline position-relative my-0 mx-auto py-2 list-unstyled">
                    {educationtimelineData
                      .slice(Math.ceil(educationtimelineData.length / 2))
                      .map((item, index) => (
                        <li key={index} className="py-3">
                          <div className="direction-r position-relative">
                            <div className="card bg-dark mb-4 text-white">
                              <span className="flag position-relative d-inline rounded"></span>
                              <div className="card-body position-relative rounded-3 p-3 shadow-box mx-3">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-secondary small">
                                  {item.job}
                                </p>
                                <p className="card-text">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Show skills only on that tab */}
          {activeTab === "Professional Skills" && (
            <>
              <>
                <div className="row g-4">
                  <p className="fs-5 text-secondary">
                    Programming Languages & Libraries
                  </p>
                  {Tskills.programming.map((skill, index) => (
                    <div key={index} className="col-md-2">
                      <div className="p-2 shadow-box rounded-4 h-100 text-center">
                        <div className="fs-3 text-danger">{skill.icon}</div>
                        <p className="mt-2 small">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-4 mt-4">
                  <p className="fs-5 text-secondary">Styling</p>
                  {Tskills.styling.map((skill, index) => (
                    <div key={index} className="col-md-2">
                      <div className="p-2 shadow-box rounded-4 h-100 text-center">
                        <div className="fs-3 text-danger">{skill.icon}</div>
                        <p className="mt-2 small">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-4 mt-4">
                  <p className="fs-5 text-secondary">
                    Tools & Productivity Software
                  </p>
                  {Tskills.productivityTools.map((skill, index) => (
                    <div key={index} className="col-md-2">
                      <div className="p-2 shadow-box rounded-4 h-100 text-center">
                        <div className="fs-3 text-danger">{skill.icon}</div>
                        <p className="mt-2 small">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-4 mt-4">
                  <p className="fs-5 text-secondary">
                    Project Management Skills
                  </p>
                  {Tskills.projectManagement.map((skill, index) => (
                    <div key={index} className="col-md-2">
                      <div className="p-2 shadow-box rounded-4 h-100 text-center">
                        <div className="fs-3 text-danger">{skill.icon}</div>
                        <p className="mt-2 small">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>

              <div className="row g-4 mt-4">
                <p className="fs-5 text-secondary">Interpersonal Skills</p>
                {Sskills.map((skill, index) => (
                  <div key={index} className="col-md-2">
                    <div className="p-2 shadow-box rounded-4 h-100 text-center">
                      <div className="card-img-container overflow-hidden rounded-3 fs-3">
                        <span className="text-danger">{skill.icon}</span>
                      </div>
                      <p className="mt-2 small">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

                    {/* Show experience only on that tab */}
          {activeTab === "Experience" && (
            <div className="row position-relative">
              <h6 className="text-danger fw-bold">2024 - Present</h6>
              <h2 className="fw-bold mb-4">Experiences</h2>
              <div className="row">
                <div className="col-md-6">
                  <ul className="timeline position-relative my-0 mx-auto py-2 list-unstyled">
                    {experienceData
                      .slice(0, Math.ceil(experienceData.length / 2))
                      .map((item, index) => (
                        <li key={index} className="py-3">
                          <div className="direction-r position-relative">
                            <div className="card bg-dark mb-4 text-white">
                              <span className="flag position-relative d-inline rounded"></span>
                              <div className="card-body position-relative rounded-3 p-3 shadow-box mx-3">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-secondary small">
                                  {item.role} ( {item.year} )
                                </p>
                                <p className="card-text">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="timeline position-relative my-0 mx-auto py-2 list-unstyled">
                    {experienceData
                      .slice(Math.ceil(experienceData.length / 2))
                      .map((item, index) => (
                        <li key={index} className="py-3">
                          <div className="direction-r position-relative">
                            <div className="card bg-dark mb-4 text-white">
                              <span className="flag position-relative d-inline rounded"></span>
                              <div className="card-body position-relative rounded-3 p-3 shadow-box mx-3">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-secondary small">
                                  {item.role}  ( {item.year} )
                                </p>
                                <p className="card-text">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Show certifications only on that tab */}
          {activeTab === "Certifications" && (
            <div className="row g-4">
              {certificates.map((file, index) => (
                <div key={index} className="col-md-3">
                  <div className="p-4 shadow-box rounded-4 h-100">
                    <div className="card-img-container overflow-hidden rounded-3">
                      <img
                        src={getDrivePreview(file)}
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/250x180?text=Preview+Unavailable";
                        }}
                        className="card-img-top w-100 zoom-on-hover"
                        alt={file.name}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </div>
                    <p className="mt-2 text-center small">{file.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
