"use client"
import { RegisterButton } from "@/components/Buttons";
import React from "react";

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

export default function Callout({...props}:CalloutProps) {
  return (
    <section dir="rtl" className="pt-28 pb-38" {...props}>
      <div className="flex flex-col items-center gap-5 mr-[24px] md:mr-[48px]" >
        <h1 className="text-4xl font-medium text-center" >
          
        نصنع صناع المنتجات
        سجل الآن!
         </h1>
     
         <RegisterButton variant='secondry' classes='w-[290px] md:w-[440px] h-[62px] md:h-[48px]' />
        
        
        </div>


        <br/><br/><br/>
       
    
    </section>
  );
}
