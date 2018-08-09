import React from 'react';
import '../css/aboutMe.css';
import scenery from '../mountain_nature.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe-div">
    
      <h1>ABOUT ME</h1>
     
      <h3 className="aboutMe-h3">Who am I?</h3>

      <p>My name is Pi Wei, I am a Malaysian. 
        Previously, I was an electronics engineer working in Penang for approximately one and a half years.
        In 2011, I moved to Singapore as I got a job to work in a wafer fabrication company.
        In 2015, I decided to switch career hence currently I am a childcare teacher. Yeah, I know it's a totally different industry. 
        I do not regret switching career because I have attained much personal growth. 
        I consider these three years in early childhood industry as a long break. However, 
        I think now it's time to go back to a field that requires more logical thinking.</p>
     
      <h3>Why do I Want to Join TechLadies Bootcamp?</h3>

      <p>
        First and foremost, I am interested in coding thus I would like to delve myself in coding.
        And, I wish to be a front-end web developer (hopefully by Jan 2019).
      </p>
        
      <p>
        Most importantly, I have built trust in TechLadies after attending a few TechLadies events 
        especially Bootcamp 3 Graduation Party that have impressed me a lot. 
        As what I see, TechLadies volunteers are very dedicated, friendly and selfless. 
        I will be proud of myself if one day I can also volunteer myself just like volunteers of TechLadies. 
      </p>
        
      <p>
        On the other hand, I am a vegetarian, and I wish to support environmental movement.
        Therefore, when the participating NGO (of front-end project) was announced in the Info Session,
         I feel personally connected to the project of Bootcamp 4 very much. 
      </p>
      
      <p>
        In addition, I think I am a bit lucky as I have been learning some basic Javascript before Bootcamp 4 was announced.
        Therefore I am not that intimidated in giving it a try to apply for the bootcamp. 
        To be honest, I did not apply for Bootcamp 3 last year because Ruby on Rails was totally alien to me
         and I had no confidence to complete the technical task in such a short period.
        The timing, the programming language, the NGOs of Bootcamp 4 seems to be perfect match to me this time round, 
        so that is pretty much why I want to join the bootcamp. 
      </p>

      <p>
        Wish me luck!
      </p>
      
      <p>
        Lastly, I am including an image of a rolling hills 
        (downloaded from <a href = "http://www.tokkoro.com/picsup/3056361-blue-sky_clouds_cloudy_countryside_dawn_daylight_dramatic_dusk_grass_grass-land_hills_landscape_light_morning_mountain_nature_outdoor_outdoors_scenic_summer_sun_sunlight_sunrise_sunset_sunshine_t.jpg"> here</a>)
         simply because I love green scenery :D
      </p>

      <img src={scenery} alt="rolling hills scenery"/>
    </div>
  );
}

export default AboutMe;
