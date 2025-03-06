import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* First Row - Numbers */}
        <div className="stats-row numbers-row">
          <div className="stat-item">
            <div className="stat-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/1-1.png" alt="Calendar icon" />
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-description">
              DECADES OF EXPERIENCE IN ICONIC DEVELOPMENTS
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/2-1.png" alt="Building icon" />
            </div>
            <div className="stat-number">4.1</div>
            <div className="stat-description">
              MILLION SQ. M. OF RESIDENTIAL & COMMERCIAL SPACES
            </div>
          </div>
        </div>

        {/* Second Row - Values */}
        <div className="stats-row values-row">
          <div className="value-item">
            <div className="value-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/3-1.png" alt="Trophy icon" />
            </div>
            <div className="value-title">CONSISTENT</div>
            <div className="value-description">
              ACCOLADES FOR LIFE ENHANCEMENT
            </div>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/4-1.png" alt="Compass icon" />
            </div>
            <div className="value-title">STRONG</div>
            <div className="value-description">
              FOCUS ON PLANNING, DESIGNS & EXECUTION
            </div>
          </div>
        </div>

        {/* Third Row - Additional Stats */}
        <div className="stats-row achievements-row">
          <div className="stat-item">
            <div className="stat-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/5-1.png" alt="Key icon" />
            </div>
            <div className="stat-number">35000+</div>
            <div className="stat-description">
              DELIGHTED CUSTOMERS
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/6-2.png" alt="People icon" />
            </div>
            <div className="stat-number">150+</div>
            <div className="stat-description">
              MNC CLIENTS
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/7.png" alt="Building icon" />
            </div>
            <div className="stat-number">250+</div>
            <div className="stat-description">
              LANDMARKS CREATED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 