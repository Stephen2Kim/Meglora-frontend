// src/components/IllnessCards.js
import React from 'react';
import { Link } from 'react-router-dom';
import './IllnessCards.css';  // Optional: Add your custom styles

const IllnessCards = () => {
  return (
    <div className="illness-cards-container">
      {/* Large illness cards (Top row) */}
      <div className="large-cards">
        <div className="card large cancer">
          <img src="https://via.placeholder.com/150?text=Cancer" alt="Cancer" />
          <h3>Cancer</h3>
          <p>Learn more about Cancer</p>
          <Link to="/cancer" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card large aids">
          <img src="https://via.placeholder.com/150?text=AIDS" alt="AIDS" />
          <h3>AIDS</h3>
          <p>Learn more about AIDS</p>
          <Link to="/aids" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card large diabetes">
          <img src="https://via.placeholder.com/150?text=Diabetes" alt="Diabetes" />
          <h3>Diabetes</h3>
          <p>Learn more about Diabetes</p>
          <Link to="/diabetes" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>
      </div>

      {/* Small illness cards (Bottom row) */}
      <div className="small-cards">
        <div className="card small pregnancy">
          <img src="https://via.placeholder.com/100?text=Pregnancy" alt="Pregnancy" />
          <h3>Pregnancy</h3>
          <p>Learn more about Pregnancy</p>
          <Link to="/pregnancy" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card small dental-health">
          <img src="https://via.placeholder.com/100?text=Dental+Health" alt="Dental Health" />
          <h3>Dental Health</h3>
          <p>Learn more about Dental Health</p>
          <Link to="/dental-health" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card small optician">
          <img src="https://via.placeholder.com/100?text=Optician" alt="Optician" />
          <h3>Optician</h3>
          <p>Learn more about Optician</p>
          <Link to="/optician" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card small ent">
          <img src="https://via.placeholder.com/100?text=ENT" alt="ENT" />
          <h3>ENT</h3>
          <p>Learn more about ENT</p>
          <Link to="/ent" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card small sexual-health">
          <img src="https://via.placeholder.com/100?text=Sexual+Health" alt="Sexual Health" />
          <h3>Sexual Health</h3>
          <p>Learn more about Sexual Health</p>
          <Link to="/sexual-health" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>

        <div className="card small psychology">
          <img src="https://via.placeholder.com/100?text=Psychology" alt="Psychology" />
          <h3>Psychology</h3>
          <p>Learn more about Psychology</p>
          <Link to="/psychology" className="learn-more-btn">
            Learn More <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IllnessCards;
