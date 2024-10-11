"use client";
import { EVENT_GOALS } from "@/app/constants";
import { Title } from "@/components/Texts";
import { motion } from "framer-motion";
import React from "react";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Goals({ ...props }: AboutProps) {
  return (
    <section id="goals" dir="rtl" className="pt-28 flex flex-col items-center justify-center gap-4" {...props}>
        <Title title="مراحل البرنامج" />

      <div className="flex flex-col md:flex-row gap-5 mb-40">
        <div id="goals-section" className="flex flex-col gap-9 px-6 w-[80vw] select-none">
          {EVENT_GOALS.map((goal,i) => {
            return (
              <motion.div
                initial={{ opacity: 0.8 - 0.1 * i }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 1.1, opacity: 1 }}
                className="flex flex-col gap-4"
                key={goal.id}
              >
                <p className="text-[#334961] font-bold text-[20px] md:text-2xl ">
                  {goal.title}
                </p>
                <p className="text-[#334961] text-[16px] md:text-[18px]">
                  {goal.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
