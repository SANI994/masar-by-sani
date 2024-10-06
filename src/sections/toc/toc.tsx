"use client";
import React from "react";
import { HACKATHON_TOC } from "@/app/constants";
import { motion } from "framer-motion";

interface TOCProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function TOC({ ...props }: TOCProps) {
  return (
    <section id="terms" {...props}>
      <div className="flex flex-col gap-4 items-center mb-14 text-center">
        <h1 className="text-[#334961] text-[40px] font-semibold">
          {" "}
          الشروط والاحكام
        </h1>
      </div>

      <div dir="rtl" className="flex flex-col gap-12 mx-6 md:mx-12">
        {HACKATHON_TOC.map((term, index) => {
          return (
            <motion.div whileHover={{scale:1.05}} whileTap={{scale:1.05}} key={index} className="flex flex-row items-start  gap-4 mb-2">
              <img  src={term.image} width={28} className="rotate-180" />
              <p  className="text-[#3D3D3D] text-[20px] select-none">{term.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
