"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const IMAGES_LIST = [
    {
      src: "./imgs/partners/tanmia-bank.png",
      alt: "partner logo",
      width:84,
      height:76,
    },
    {
      src: "./imgs/partners/KSU.png",
      alt: "partner logo",
       width:84,
      height:76,
    },
    {
      src: "./imgs/partners/KACST.png",
      alt: "partner logo",
      width:84,
      height:76,
    },
    {
      src: "./imgs/partners/mmo.png",
      alt: "partner logo",
      width:84,
      height:76,
    },
    {
      src: "./imgs/partners/almarai.png",
      alt: "partner logo",
       width:84,
      height:76,
    },
    {
      src: "./imgs/partners/ntdp.png",
      alt: "partner logo",
       width:84,
      height:76,
    }
  ];

  return (
    <section id="#" className="py-2 mt-[30px] md:mt-19" dir="rtl">
      <div className="flex flex-col gap-4 items-center mb-14 text-center">
        <h1 className="text-[#334961] text-[40px] font-semibold">
          {" "}
         الشركاء
        </h1>
      </div>
     
      <div  className="flex flex-wrap gap-10 md:gap-20 sm:gap-10 justify-center my-[15px]">
        {IMAGES_LIST.map((img, i) => {
          return <motion.img initial={{filter:'grayscale(1)'}} whileHover={{filter:'grayscale(0)'}} whileTap={{filter:'grayscale(0)'}} width={img.width} key={i} src={img.src} alt={img.alt} />;
        })}
      </div>
    </section>
  );
}
