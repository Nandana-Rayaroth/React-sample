import React from "react";
import salamino from "../assets/salamino.jpg"
import Skill from "./Skill";

const skills = ["Html+css", "Javascript", "Web Design", "Git and GitHub", "React", "Svelte"]
const bgcolor = ["blue", "yellow", "green", "orange ", "brown", "red"]

function Card(){

  return (
    <div className="card">
      <img src={salamino} alt="salamino" className="avatar" />
      <div className="data">
        A Salamino Pizza is a savory Italian-style pizza featuring spicy salami
        (salamino piccante), often with mozzarella, tomato sauce, and sometimes
        onions, ricotta, or olives, known for its classic.
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <Skill key={skill} skill={skill} bgcolor={bgcolor[index]}>

          </Skill>
        ))}
      </ul>
    </div>
  );
}

export default Card