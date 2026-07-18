import React from "react";
import { motion } from "motion/react";

const SkillsBar = () => {
  const technicalSkills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Node.js", percent: 75 },
    { name: "Express", percent: 75 },
    { name: "MongoDB", percent: 70 },
    { name: "PHP", percent: 85 },
    { name: "Laravel", percent: 80 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">
        Technical Skills
      </h2>

      {technicalSkills.map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between mb-2">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div>
          <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.percent}%` }} transition={{ duration: 1 }} 
           className="h-3 bg-purple-500 rounded-full"></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;