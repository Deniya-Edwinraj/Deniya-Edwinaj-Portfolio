import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_KEY = "AIzaSyBv2Ktmv1ozdJKCcCIB1nOEhlAKVajfE6w";
const ROOT_FOLDER_ID = "1r2BeGq7IZD_CE9bLwQ1D7dsSI9xLuNLu";
const DRIVE_API = "https://www.googleapis.com/drive/v3/files";


export default function Resume() {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = [
    "Education",
    "Professional Skills",
    "Experience",
    "Certifications",
  ];

  const [certificates, setCertificates] = useState([]);

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

    const loadCertificates = async () => {
      const allFiles = await fetchFiles(ROOT_FOLDER_ID);
      setCertificates(allFiles);
    };

    loadCertificates();
  }, []);
  return (
    <section id="resume" className="text-light py-5 mt-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 100, y: -50 }} // starts off to the right and above
          whileInView={{ opacity: 1, x: 0, y: 0 }} // animates to its natural position
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

          {/* Certification */}
          <div className="row g-4">
            {certificates.map((file, index) => {
              const isPDF = file.mimeType === "application/pdf";
              const src = isPDF
                ? `https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${file.id}`
                : `https://drive.google.com/uc?id=${file.id}`;

              return (
                <div key={index} className="col-md-4">
                  <div className="p-3 shadow-box rounded-4 h-100">
                    <div className="card-img-container overflow-hidden rounded-3">
                      <img
                        src={src}
                        className="card-img-top w-100 zoom-on-hover"
                        alt={file.name}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
