import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributors.css';

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/Priyaaa1/StartConnect-Hub/contributors'
        );
        setContributors(response.data);
      } catch (error) {
        console.error('Error in fetching contributors:', error);
      }
    }
    fetchContributors();
  }, []);

  return (
    <div className="contributors-container">
      <h1 className="contributors-title">Our Contributors</h1>
      <div className="contributors-grid">
        {contributors.map((contributor) => (
          <div key={contributor.id} className="contributor-card">
            <a
              href={contributor.html_url}
              className="contributor-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="contributor-avatar"
              />
            </a>
            <h2 className="contributor-name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.2rem"
                height="1.2rem"
                className="github-icon"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.76c-2.78.6-3.37-1.35-3.37-1.35-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.23-.25-4.58-1.12-4.58-4.98 0-1.1.4-2 1.07-2.71-.11-.26-.47-1.31.1-2.73 0 0 .85-.27 2.78 1.02a9.639 9.639 0 0 1 2.54-.34c.87.01 1.76.12 2.54.34 1.92-1.29 2.77-1.02 2.77-1.02.57 1.42.21 2.47.1 2.73.66.71 1.07 1.61 1.07 2.71 0 3.88-2.35 4.73-4.61 4.98.36.31.69.92.69 1.85v2.73c0 .27.18.59.69.49C21.13 20.17 24 16.42 24 12c0-5.52-4.48-10-10-10z" />
              </svg>
              {contributor.login}
            </h2>
            <p className="contributor-contributions">
              Contributions: {contributor.contributions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;
