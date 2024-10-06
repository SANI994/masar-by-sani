/* eslint-disable */

import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";

interface PathTextProps {
  heading: string;
}

export const PathText = ({ heading }: PathTextProps) => {



  return (
    <motion.p
     initial={{opacity:0.6}}
     whileInView={{opacity:1}}
    
      className="group relative pt-20 bm-10 flex w-screen justify-center text-center transition-colors duration-500"
    > 
      <motion.span

        className="relative w-screen py-10 z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-black group-active:text-black md:text-6xl"
      >
        <motion.span
          className="inline-block"
        >
          {heading}
        </motion.span>
      </motion.span>
    </motion.p>
  );
};
