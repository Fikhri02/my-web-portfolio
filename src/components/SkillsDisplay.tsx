import React from "react";
import { FaFlutter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

function SkillsDisplay() {
  return (
    <section className="bg-gray-900 py-3 flex flex-col items-center">
      <p className="text-white my-0">Skills</p>
      <div className="py-5 w-full flex justify-center gap-10 my-0">
        <FaFlutter size={75} style={{ color: "white" }} />
        <FaReact size={75} style={{ color: "white" }} />
        <FaPhp size={75} style={{ color: "white" }} />
        <FaJava size={75} style={{ color: "white" }} />
      </div>
    </section>
  );
}

export default SkillsDisplay;
