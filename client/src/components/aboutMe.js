import React from 'react';
import '../css/aboutMe.css';
import scenery from '../scenery-rolling-hills.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe-div">
    
      <h1>ABOUT ME</h1>
     
      <h3 className="aboutMe-h3">Who am I?</h3>

      <p>My name is Pi Wei, I am a Malaysian. 
        Previously, I was working as an engineer in Penang for approximately one and a half years.
        After that, I moved to Singapore as I got a job to work in a wafer fabrication company.
        Currently, I am a childcare teacher. Yeah, I know it's a totally different industry. 
        I do not regret switching career because I attained much personal growth. 
        I consider these three years in early childhood industry as a long break and 
        I think it is time to go back to a field that requires more of my logical thinking.</p>
     
      <h3>Why do I Want to Join TechLadies Bootcamp?</h3>

      <p>
        So, why do I want to be part of TechLadies Bootcamp 4?
        First and foremost, I am interested in coding and I want to delve myself in coding.
        I want to be a front-end web developer (by Jan 2019) and hopefully I can achieve this goal through TechLadies Bootcamp 4.
      </p>
        
      <p>
        Most importantly, I have built trust in TechLadies after attending a few TechLadies events such as Bootcamp 3 Graduation Party. 
        All the volunteers are very dedicated, friendly and selfless. 
        I will be proud of myself if one day I can also volunteer myself just like volunteers of TechLadies. 
      </p>
        
      <p>
        On the other hand, I am a vegetarian, and I also wish to support environmental movement.
        Therefore, I feel personally connected to the project of Bootcamp 4 very much. 
        I would consider myself a bit lucky as I have been learning some basic Javascript before the bootcamp was announced.
        Therefore I am not that intimidated in giving it a try to apply for the bootcamp.
        And, that is pretty much why I want to join the bootcamp.
      </p>
      
      <p>
        Lastly, I am including an image of a rolling hills scenery simply because I love green scenery :D
      </p>

      <img src={scenery} alt="rolling hills scenery"/>
    </div>
  );
}

export default AboutMe;
