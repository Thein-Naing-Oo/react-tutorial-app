import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import Day2 from './day2/day2';
import ProfileCard from './day2/ProfileCard';
import TimeTable from './day3/TimeTable';
import Schedule from './day3/Schedule';
import Buddhism from './buddhism/Buddhism';

const App = () => {
  const users = [
    { id: 1, name: "John Doe", age: 30, bio: "Software Engineer at Google" },
    { id: 2, name: "Jane Smith", age: 28, bio: "Product Designer at Apple" },
    { id: 3, name: "Sam Wilson", age: 35, bio: "Data Scientist at Amazon" },
    { id: 3, name: "Diana", age: 35, bio: "princess at Amazon" }
  ];

  return (
    <div className="App">
      <div className="app-content">
        <Buddhism/>
      </div>
    </div>
  );
}

export default App;
