"use client"
import { RegisterButton } from "@/components/Buttons";
import React from "react";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

export default function About({...props}:AboutProps) {
  return (
    <section id="about" dir="rtl" className="pt-28 pb-38" {...props}>
      <div className="flex flex-col items-center gap-5 mx-6  md:mr-[48px]" >
    
        <h1 className="text-[40px] font-semibold text-center text-[#334961]" >مسار من صانع</h1>
        <div className="flex justify-between">
          <p className="max-w-[1230px] text-[#334961] text-[16px] md:text-[20px] leading-10 font-light">
         
مسار من صانع هو برنامج تدريبي تعليمي مبتكر يهدف إلى تطوير المهارات التقنية في مجالات الذكاء الاصطناعي، هندسة البرمجيات، تجربة المستخدم، وإدارة المنتجات خلال ٣ مراحل، مرحلة التعليم والتدريب، مرحلة تطوير المنتجات ومرحلة التمكين.
          </p>
          <div className='text-xl mt-8 pb-16 md:mt-20'>
        </div>
        
          {/* <img src="./imgs/about/strips.png" className={`hidden md:block`} /> */}
        </div>

        <RegisterButton variant='secondry' classes='w-[290px] md:w-[440px] h-[62px] md:h-[48px]' />

        <br/><br/><br/>
       
      </div>
    </section>
  );
}
