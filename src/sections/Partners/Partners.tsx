"use client";
import { Title } from "@/components/Texts";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const IMAGES_LIST = [
    // {
    //   src: "/imgs/partners/tanmia-bank.png",
    //   alt: "partner logo",
    //   width:240,
    //   height:200,
    // },
    // {
    //   src: "/imgs/partners/KSU.png",
    //   alt: "partner logo",
    //    width:160,
    //   height:200,
    // },
    {
      src: "/imgs/partners/KACST.svg",
      alt: "partner logo",
      width:180,
      height:100,
    },
    // {
    //   src: "/imgs/partners/mmo.png",
    //   alt: "partner logo",
    //   width:260,
    //   height:200,
    // },
    {
      src: "/imgs/partners/almarai.png",
      alt: "partner logo",
       width:160,
      height:200,
    },
    {
      src: "/imgs/partners/ntdp.svg",
      alt: "partner logo",
       width:210,
      height:80,
    },
    {
      src: "/imgs/partners/mcit.svg",
      alt: "partner logo",
       width:280,
      height:87,
    },
    {
      src: "/imgs/partners/jahez.svg",
      alt: "partner logo",
       width:180,
      height:87,
    }
  ];

  

  return (
    <section id="#" className="py-2 mt-[30px] md:mt-19" dir="rtl">
      <div className="flex flex-col gap-4 items-center mb-14 text-center">
       <Title title="الشركاء" />
         
        
      </div>
     
      <motion.div  className="flex flex-wrap gap-10 md:gap-20 sm:gap-10 justify-center items-center my-[15px]"
      >
        {IMAGES_LIST.map((img, i) => {
          return <Image width={img.width} height={img.height} key={i} src={img.src} alt={img.alt} className="cursor-pointer" />;
        })}
      </motion.div>
    </section>
  );
}
