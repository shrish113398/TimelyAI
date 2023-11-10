import React from 'react';

const Home = () => {
  return (
    <div>
      <nav>
        <div className="company-logo">
          <img
            src="https://framerusercontent.com/images/bkl4T9F9sYcOfgNr9MYCgAg.png"
            alt="TIMELAI Logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="https://timelyai.com/" className="nav-link">
              <b>Home</b>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
            <b>Campaigns</b>
            </a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default Home;
