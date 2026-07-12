import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 bg-[#120018] text-white">

      {/* Left Side */}
      <div className="max-w-lg space-y-5">
        <span className="text-xl text-purple-400">Hi! I'm</span>

        <h1 className="text-5xl font-bold">Abdul Rafay</h1>

        <p className="text-gray-300">
          I enjoy turning ideas into modern and user-friendly web
          applications. My focus is on building clean, reliable, and
          meaningful digital experiences while continuously learning
          and improving my skills.
        </p>

        <button className="bg-purple-600 px-5 py-2 rounded hover:bg-purple-700 transition">
          Download Resume
        </button>

        <button className="border border-purple-500 px-5 py-2 rounded hover:bg-purple-700 transition">
        Contact Me
        </button>
      </div>

      {/* Right Side */}
      <div>
        <img
          src="/your-image.png"
          alt="Profile"
          className="w-72 rounded-full"
        />
      </div>

    </div>
  );
};

export default Intro;