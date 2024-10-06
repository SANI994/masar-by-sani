'use client';
import React from "react";
import Questions from "./questions";

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

export default function FAQ({...props}:FAQProps) {

      return (
            <section id="faq" {...props} className="mt-[112px] md:mt-[253px]">
            
            <div className="flex flex-col gap-4 items-center mb-8 text-center">
            <h1 className="text-[#334961] text-[40px] font-semibold">الاسئلة الشائعة</h1>
            </div>

            <Questions/>

            </section>
      )
}