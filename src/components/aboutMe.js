import React from 'react';
import '../css/aboutMe.css';
import '../scenery-rolling-hills.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe-div">
    <img src="scenery-rolling-hills.jpg" alt="rolling hills scenery"/>
      <h1>ABOUT ME</h1>
     {/* who you are, 
      why you want to be part of the TechLadies Bootcamp, 
      and include one image (it can be a photo of yourself or anything you like (cats are always a good option!)) */}
      <h3 className="aboutMe-h3">Who am I?</h3>

      <p>I am Malaysian. 
        Previously, I was working as an engineer in Penang for approximately one and a half years.
        After that, I moved to Singapore as I got a job to work in a wafer fabrication company.
        Currently, I am a childcare teacher. Yeah, I know it's a totally different industry. I do not regret switching career because I attained much personal growth.</p>
     
      <h3>Why do I Want to Join TechLadies Bootcamp?</h3>

      <p>
        So, why do I want to be part of TechLadies Bootcamp 4?
        First and foremost, I am interested in coding and I want to delve myself in coding.
        I want to be a front-end web developer and I really hope that I can achieve this goal through TechLadies Bootcamp 4.
      </p>
        
      <p>
        Most importantly, I have built trust in TechLadies after attending a few TechLadies events such as Bootcamp 3 Graduation Party. 
        Everyone is genuine and volunteer without asking for return. 
      </p>
        
      <p>
        On the other hand, I am a vegetarian, and I also wish to support environmental movement.
        Therefore, I feel personally connected to the project of Bootcamp 4 very much.
      </p>
    </div>
  );
}

export default AboutMe;
