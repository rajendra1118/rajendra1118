import React from "react";

export const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/profile_img.JPG" alt="About Me" />
      </div>

      <div>
        <div className="hero--section--content--box  about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">Hello ! I am Rajendra</h1>
            <p className="hero--section--description">
              A self-motivated, hard-working, and ambitious Full-Stack Developer
              and a good learner with proficiency in Java, Spring, SpringBoot.
              Having a Problem-solving mindset, 
              Looking forward to working as a developer and competent employee
              in an exciting tech company.​​​
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
