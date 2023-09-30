import React from "react";
import "./About.css"; // Import the CSS file with the styling

function About() {
  return (
    <section id="about" className="section-container">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container2">
        <div className="section__pic-container2">
          <img
            src="https://avatars.githubusercontent.com/u/114108495?v=4"
            alt="Profile picture"
            className="about-pic"
            style={{ width: "200px", height: "200px" }} // Set width and height
          />
        </div>
        <div className="about-details-container2">
          <div className="about-containers2">
            <div className="details-container2">
              <img
                src=""
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                FullStack Development
              </p>
            </div>
            <div className="details-container2">
              <img
                src="./assests/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Pursuit
                <br />
                Certification In FullStack Development
              </p>
            </div>
          </div>
          <div className="text-container2">
            <h3>
            <p>
              I am actively pursuing a FullStack Development Certification at
              Pursuit, showcasing my openness and readiness for the work field.
              I am a dedicated and enthusiastic learner, driven by the desire to
              acquire fresh skills and knowledge in the realm of web
              development. My educational journey has led me through courses in
              React, JavaScript, HTML, CSS, and PostgreSQL. Currently, I am
              engrossed in hands-on projects that illustrate my proficiency in
              crafting dynamic, responsive, and user-friendly web applications.
              I call it Tech Space unite
            </p>
            </h3>
          </div>
        </div>
      </div>

      <div className="section-container2">
        <div className="section__pic-container2">
          <img
            src="https://avatars.githubusercontent.com/u/104827679?v=4"
            alt="Profile picture"
            className="about-pic"
            style={{ width: "200px", height: "200px" }} // Set width and height
          />
        </div>
        <div className="about-details-container2">
          <div className="about-containers2">
            <div className="details-container2">
              <img
                src=""
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container2">
              <img
                src="./assests/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Pursuit
                <br />
                Certification In FullStack Development
              </p>
            </div>
          </div>
          <div className="text-container2">
            <h3>
            <p>
              Hi, I am a Pursuit fellow with experience in software development
              specifically in full-stake web development. My journey into
              software development began when I was working as a network
              engineer one day, I had a conversation with one of my coworkers
              about programming and he explained how challenging and rewarding
              it is to create a fully functional web application from scratch.
              His enthusiasm and insights piqued my interest in web development
              and I haven’t looked back since. I’m a self-learner, proficient in
              problem-solving and debugging, and passionate about technology.
            </p>
            </h3>
          </div>
        </div>
      </div>

      {/* The arrow icon */}
    </section>
  );
}

export default About;
