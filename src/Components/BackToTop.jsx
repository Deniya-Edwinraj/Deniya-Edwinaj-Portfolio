import { useEffect, useRef, useState } from "react";

function BackToTop() {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);
  const pathLength = 307.919; // Matches stroke-dasharray
  const [show, setShow] = useState(false);

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / docHeight;

    const drawLength = pathLength * (1 - scrollPercentage);
    if (pathRef.current) {
      pathRef.current.style.strokeDashoffset = drawLength;
    }

    setShow(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="d-none d-md-flex align-items-end">
      <div
        className={`progress-wrap cursor-pointer ${show ? "active-progress" : ""}`}
        onClick={scrollToTop}
        ref={wrapRef}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            ref={pathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default BackToTop;