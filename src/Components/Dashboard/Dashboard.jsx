import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy user data
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://via.placeholder.com/150', // URL to user's profile image
    // Add more user information as needed
  };

  return (
    <div className="dashboard">
      <div className="profile-info">
        <div className="profile-image">
          <img src={userData.image} alt="Profile" />
        </div>
        <div className="user-details">
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          {/* Add more user details here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
