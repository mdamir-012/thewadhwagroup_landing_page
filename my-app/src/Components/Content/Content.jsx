import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-left">
        <div className="building-image">
          <img 
            src='https://www.thewadhwagroup.com/wp-content/uploads/2024/09/index-image.jpg' 
            alt="Building Image"
            loading="eager" // Add eager loading
          />
        </div>
      </div>
      
      <div className="content-right">
        <h1 className="main-heading">WE DESIGN YOUR WORLD WITH OUR HEARTS</h1>
        <p className="sub-heading">SETTING A STRONG FOUNDATION FOR YOU</p>
        
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Impeccable project execution</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Strong brand presence & delivery excellence</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Transparency in dealings</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>In-depth due diligence to ensure clear land titles</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Litigation-free projects</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Design innovation with emphasis on practicality</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">›</span>
            <p>Positive exit covenants (Institutions, Investors, Customers)</p>
          </div>
        </div>

        <div className="ventilit-section">
        
          <img 
            src={'https://www.thewadhwagroup.com/wp-content/uploads/2025/02/VENTILIT-Wadhwa-04-1024x523.jpg'} 
            alt="Ventilit Logo" 
            className="ventilit-logo"
            loading="eager" // Add eager loading
          />
        
        </div>
      </div>
    </div>
  );
};

export default Content; 