import React from "react";

function About() {
  return (
    <div>
      <div className="hero">
        <p className="about-title">此專案使用 Pexels API</p>
        <p className="about-link">
          請參閱：
          <a
            href="https://www.pexels.com/api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.pexels.com/api/
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
