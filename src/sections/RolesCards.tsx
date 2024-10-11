"use client";
import { RolesList } from "@/app/constants";
import RoleCard from "@/components/RoleCard";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../sections/Hero/Hero.module.scss";
interface RolesCardsProps {
  onRoleSelected: (id: number) => void;
}

const RolesCards = ({ onRoleSelected }: RolesCardsProps) => {
  const variants: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 },
  };

  const items = [
    {
      id: 1,
      content: "الذكاء الاصطناعي",
    },
    {
      id: 2,
      content: "هندسة البرمجيات",
    },
    {
      id: 3,
      content: "تجربة المستخدم",
    },
    {
      id: 4,
      content: "إدارة المنتجات",
    },
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
    <section className="flex flex-col gap-10 items-center justify-center md:flex-wrap p-3 md:h-[80vh]" >
    
      <div
        className={`${styles.text} pt-0 md:pt-2 flex flex-col justify-center items-center text-center`}
        dir="rtl"
      > 
        <h1 className="text-[40px] !text-[#5CECCE] md:text-[64px] font-black">
          #جرب_تصنع_منتج
        </h1>
        <div className="text-[28px] leading-10 sm:leading-[78px] mx-6 text-[#334961]">
          <p>
            {" "}
            مسار من صانع هو طريقك لتترجم اهتمامك في{" "}
            <AnimatePresence>
              <motion.span
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[#5CECCE] font-bold"
                key={items[index].id}
              >
                {" "}
                {items[index].content}{" "}
              </motion.span>
            </AnimatePresence>{" "}
            <p>إلى منتج رقمي جاهز</p>
          </p>
        </div>
      </div>

      <h1 className="text-[#334961] text-xl md:text-2xl font-semibold" dir="rtl">
          {" "}
          اختر مسارك!
        </h1>

      

      <div className="flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center my-4">
        {RolesList.map((role) => {
          return (
            <RoleCard
              key={role.id}
              image={role.image}
              onSelected={() => onRoleSelected(role.id)}
              title={role.name}
              textColor="text-[#334961]"
              className="cursor-pointer uppercase rounded-lg w-[200px] p-4"
            />
          );
        })}
      </div>
    </section>
  );
};

export default RolesCards;
