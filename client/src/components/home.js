import React from 'react';
import '../css/home.css';

const Home = () => {
  return (
    <div className="home-div">
      <h1>Welcome</h1>
      <p>This is my first ever ReactJS web application. <br/>
         It is a to-do list web application which needs to be compeleted 
         in order to apply for TechLadies Bootcamp 4.</p>

         <p>This to-do web application allows user to add tasks to a list. <br/>
            The tasks in the list can be edited after clicking on the "Edit" button. <br/>
            Moreover, the tasks can be marked as completed by clicking once on the text to get strikethrough over the text. <br/>
            Clicking one more time will remove the strikethrough.<br/>
            The tasks can also be deleted by clicking on the "Remove" button.
            </p>
      <footer>
        Last update: August 2018
      </footer>
    </div>
  );
}

export default Home;
