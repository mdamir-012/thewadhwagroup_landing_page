import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">A brief
          About us</h1>
          <div className="about-text">
            <p>
              The Wadhwa Group carries a rich legacy of 5+ Decades built on
              the trust and belief of our customers and stakeholders. The group
              is one of Mumbai's leading real estate companies with 250+
              Landmarks and is currently developing residential, commercial
              and township projects spread across approximately 4.1 Million
              Sq.M.
            </p>
            <p>
              Timely completion of projects coupled with strong planning and
              design innovation gives the group an edge over its competitors. As
              an organization, the group is also known for its employee-friendly
              and professional working environment. Today, the group's
              clientele comprises of over 35,000+ satisfied customers and over
              150 + MNCs.
            </p>
          </div>
          <div className="scroll-indicator">
            <div className="arrow-container">
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
        <div className="about-images">
          <div className="image-container">
            <div className="image-wrapper first-image">
              <img 
                src="https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-about1.jpg" 
                alt="Modern office interior"
                className="interior-image" 
              />
            </div>
            <div className="image-wrapper second-image">
              <img 
                src="https://www.thewadhwagroup.com/wp-content/uploads/2024/09/platina.jpg" 
                alt="Avendus building exterior"
                className="exterior-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
