import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";
import { h1 } from "framer-motion/client";

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h2 className="text-3xl font-bold text-center">Teknolojiler</h2>


      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-7xl">
        {technologies.map((technology) => (
          <div style={{ fontWeight: 700 }} key={technology.name} className="flex flex-col items-center">
            <h1>{technology.name}</h1>
            <div className="w-28 h-28 flex justify-center items-center">
              <BallCanvas icon={technology.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default SectionWrapper(Tech, "");
