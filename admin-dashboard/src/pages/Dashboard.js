// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>Statistics</h2>
          <p>Total Users: 100</p>
          <p>Total Movies: 50</p>
        </div>
        <div>
          <h2>Recent Activities</h2>
          <ul>
            <li>User John Doe added a new movie</li>
            <li>User Jane Smith deleted a user</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
