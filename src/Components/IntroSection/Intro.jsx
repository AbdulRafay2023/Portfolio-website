import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 bg-[#120018] text-white">
      {/* Left Side */}
      <div className="max-w-lg space-y-5">
        <span className="text-xl text-purple-400">Hi! I'm</span>

        <h1 className="text-5xl font-bold">Abdul Rafay</h1>

        <p className="text-gray-300">
          I enjoy turning ideas into modern and user-friendly web applications.
          My focus is on building clean, reliable, and meaningful digital
          experiences while continuously learning and improving my skills rfay
          rafay.
        </p>

        <div class="flex gap-5">
          <button className="bg-purple-600 px-5 py-2 rounded hover:bg-purple-700 transition">
            Download Resume
          </button>
          <button className="border border-purple-500 px-5 py-2 rounded hover:bg-purple-700 transition">
            Contact Me
          </button>
        </div>

        <div className="flex gap-5 text-3xl mt-6">
          <a href="https://www.linkedin.com/in/abdul-rafay-55329920a/" target="_blank"   className="hover:bg-purple-500 transition border border-purple-500 px-3 py-2 rounded"><FaLinkedin/></a>
          <a href="https://github.com/AbdulRafay2023" target="_blank"   className="hover:bg-purple-500 transition border border-purple-500 px-3 py-2 rounded"><FaGithub/></a>
        </div>
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
