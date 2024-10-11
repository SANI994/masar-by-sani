"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import DaysCount from './DaysCount';
import RegisterButton from '../../components/Buttons/RegisterButton';
import { motion, AnimatePresence, Variants } from "framer-motion";

type HeroT = {
  onHover?: (hovered:boolean) => void;

}

const variants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.5 }
};

const Hero = ({onHover}:HeroT) => {

  const onMouseOver = () => {
    onHover && onHover(true)

  }
  const onMouseOut = () => {
    onHover && onHover(false)
  }

  const items = [
    {
      id: 1,
      content: "الذكاء الاصطناعي"
    },
    {
      id: 2,
      content: "هندسة البرمجيات"
    },
    {
      id: 3,
      content: "تجربة المستخدم"
    },
    {
      id: 4,
      content: "إدارة المنتجات"
    }
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${styles.hero} justify-start sm:justify-center pt-32`} onMouseOver={onMouseOver} onMouseLeave={onMouseOut}>
      
    
      <div
        className={`${styles.text} pt-0 md:pt-2 flex flex-col justify-center items-center text-center`}
        dir="rtl"
      > 
        <h1 className="text-[40px] !text-[#5CECCE] md:text-[64px] font-black">
          #جرب_تصنع_منتج
        </h1>
        <div className="text-[28px] leading-10 sm:leading-[78px] mx-6 text-[#334961]">
      <p>  مسار من صانع هو طريقك لتترجم اهتمامك في        
      {" "}
       <AnimatePresence>
        <motion.span
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className='text-[#5CECCE] font-bold'
      key={items[index].id}
        >
          {" "}
          {items[index].content}
          {" "}
        </motion.span>
      </AnimatePresence>
      {" "}
      <p>
         إلى منتج رقمي جاهز
         </p>
        </p>
      </div>

      <p className='text-[16px] font-light mb-6 mt-4'>الـوقـت المـتبـقي عـلـى اغلاق الـتسـجـيــل</p>
      <DaysCount/>
     


      <div className='text-xl mt-8 pb-16 md:mt-20'>
          <RegisterButton variant='secondry' classes='w-[290px] md:w-[440px] h-[62px] md:h-[48px]' />
        </div>
      </div>
    
    
    </div>
  );
};

export default Hero;
