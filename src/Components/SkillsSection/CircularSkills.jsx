import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularSkills = () => {
  const professionalSkills = [
    { name: "Team Work", percent: 80 },
    { name: "Creativity", percent: 90 },
    { name: "Project Management", percent: 85 },
    { name: "Communication", percent: 90 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">
        Professional Skills
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {professionalSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28">
              <CircularProgressbar
                value={skill.percent}
                text={`${skill.percent}%`}
                styles={buildStyles({
                  pathColor: "#a855f7",
                  trailColor: "#6b7280",
                  textColor: "#fff",
                  textSize: "16px",
                  strokeLinecap: "round",
                })}
              />
            </div>

            <p className="mt-4 font-bold text-2x">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularSkills;