import React from 'react';
import '../css/home.css';

const Home = () => {
  return (
    <div className="home-div">
      <h1>Welcome</h1>
      <p>This is my first ever ReactJS web application.
         It is a to-do list web application.
         I created it as it is a technical task which needs to be compelted 
         in order to apply for TechLadies Bootcamp 4.</p>
      <footer>
        Last update: August 2018
      </footer>
    </div>
  );
}

export default Home;
