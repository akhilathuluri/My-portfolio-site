import React from "react";
import "./Education.css"; // Import the CSS file

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div className="row">
        <div className="col-4">
          <h3>Malla Reddy University</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>August 2021 - May 2025</p>
        </div>
        <div className="col-4">
          <h3>Narayana Junior College</h3>
          <p>MPC</p>
          <p>August 2019 - May 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
