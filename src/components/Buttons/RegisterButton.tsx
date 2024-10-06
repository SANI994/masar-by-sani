"use client";
import React from 'react';
import styles from './RegisterButton.module.scss';
import Link from 'next/link';
import { motion } from "framer-motion";
import { EVENT_START_DATE } from '@/app/constants';
interface RegisterButtonT {
  variant: string;
  classes?:string;
  width?:string
  height?:string
}
const RegisterButton = (props: RegisterButtonT) => {
  const endRegisterDate = new Date(EVENT_START_DATE.replace(/-/g, '/'));

  if( endRegisterDate.getTime() < new Date().getTime()) {
    return <></>;
  }
  return (
    
    <motion.div
    whileHover={{ scale: 1.1 }}
    initial={{
      backgroundImage:
        "linear-gradient(to right, #5CECCE, #5CECCE), linear-gradient(0deg, white, #5CECCE 40%)"
    }}
    animate={{
      backgroundImage:
        "linear-gradient(to right, #5CECCE, #5CECCE), linear-gradient(360deg, white, #5CECCE 40%)"
    }}
    transition={{
      type: "tween",
      ease: "linear",
      duration: 5,
      repeat: Infinity
    }}
    className={`${styles.button} ${props.classes}`}
    style={{
      border: "2px solid transparent",
      borderRadius: "12px",
      backgroundClip: "padding-box, border-box",
      backgroundOrigin: "padding-box, border-box"
    }}
  >
        <Link className='flex items-center justify-center w-full h-full text-[#334961]' style={{fontSize:'16px'}} href={"/register"}>

          التسجيل
        </Link>
       

    </motion.div>
  );
};

export default RegisterButton;
