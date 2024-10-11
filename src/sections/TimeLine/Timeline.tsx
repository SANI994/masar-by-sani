/* eslint-disable */
"use client";
import React from "react";
import TimeLineCard from "./timelineCard";
import { Title } from "@/components/Texts";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = ({ ...props }: TimelineProps) => {
  return (
    <div
      id="timeline"
      {...props}
      className="flex flex-col items-center justify-center w-screen"
    >
      <div className="flex flex-col gap-4 items-center mb-14 pt-20 md:pt-28 w-full">
        <Title title="الخط الزمني" />
      </div>

      <section className="flex flex-col justify-center items-center text-lg text-start w-screen">
        
        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الأولى"
          description="فتح التسجيل في برنامج مسار من صانع"
          date="10-11-2024"
          start_date="10-11-2024"
        />

        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الثانية"
          description="عملية الفرز والقبول في البرنامج"
          date="10-27-2024"
          start_date="10-27-2024"
          dir="ltr"
        />

        <TimeLineCard
          icon="./imgs/speakers/male_icon.svg"
          title="المرحلة الثالثة"
          description="بداية المرحلة الأولى: مرحلة التدريب والتعليم"
          date="11-03-2024"
          start_date="11-03-2024"
        />

        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الرابعة"
          description="بداية المرحلة الثانية: مرحلة تطوير المنتجات"
          date="12-28-2024"
          start_date="12-28-2024"
          dir="ltr"
        />

        <TimeLineCard
          icon="./imgs/speakers/male_icon.svg"
          title="المرحلة الخامسة"
          description="بداية المرحلة الثالثة: مرحلة التمكين"
          date="01-11-2025"
          start_date="01-11-2025"
          isLast={true}
        />
      </section>
    </div>
  );
};

export default Timeline;
