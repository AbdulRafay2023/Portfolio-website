import React from "react";
import SkillsBar from "./SkillsBar";
import CircularSkills from "./CircularSkills";

const Skills = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="text-center mb-8 mt-5 text-3xl font-bold">Technical and Professional Skills</h1>
      <div className="flex justify-around items-center">
      
      {/* Left Side */}
       <div className="">
       <SkillsBar />
       </div>
      
      {/* Right Side */}
        <div>
        <CircularSkills />
        </div>
      </div>
   
   

   
   
    </>
  );
};

export default Skills;