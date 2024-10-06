"use client"
import { EVENT_GOALS } from "@/app/constants";
import { motion } from "framer-motion";
import React from "react";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

export default function Goals({...props}:AboutProps) {
  
  
      return (
    <section id="goals" dir="rtl" className="pt-28" {...props}>
      <div className="flex flex-col md:flex-row gap-5 mb-40" >
    
       <div className="w-full h-[315px] mt:h-[340px] bg-[#5CECCE]"></div>
       <div id="goals-section" className="flex flex-col gap-9 px-6">
       {EVENT_GOALS.map((goal)=>{
            return (
                  <motion.div initial={{opacity:0.6}} whileHover={{ scale: 1.1,  opacity:1 }}
                  whileTap={{ scale: 1.1,  opacity:1 }}
                  className="flex flex-col gap-4" key={goal.id}>
                 
                  <p className="text-[#334961] text-lg font-semibold text-[16px] md:text-[20px]">
                 {goal.title}
                  </p>
                  <p className="text-[#334961] text-[14px] md:text-[14px]">
                 {goal.description}
                  </p>
                
                </motion.div>
            )
       })}

</div>
       

       
       
      </div>
      <br/><br/><br/>
    </section>


  );
}
