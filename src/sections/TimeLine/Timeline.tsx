/* eslint-disable */
"use client";
import React from "react";
import { useState } from "react";
import TimelineComp from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimeLineCard from "./timelineCard";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = ({ ...props }: TimelineProps) => {
  return (
    <div id="timeline" {...props}>
      <div className="flex flex-col gap-4 items-center mb-14 pt-20 md:pt-28">
        <h1 className="text-[#3D3D3D] text-[40px] font-semibold">
          {" "}
          الخط الزمني{" "}
        </h1>
      </div>

      <TimelineComp
        position="alternate"
        className="items-center text-lg"
      >
        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الأولى"
          description="فتح التسجيل"
          date="10-05-2024"
          start_date="10-05-2024"
        />

        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الثانية"
          description="عملية الفرز والقبول في البرنامج"
          date="10-22-2024"
          start_date="10-22-2024"
          dir="ltr"
        />

        <TimeLineCard
          icon="./imgs/speakers/male_icon.svg"
          title="المرحلة الثالثة"
          description="بداية مرحلة التدريب والتعليم"
          date="3 Nov 2024 - 28 Nov 2024"
          start_date="11-03-2024"
        />

        <TimeLineCard
          icon="./icons/calender.svg"
          title="المرحلة الرابعة"
          description="بداية مرحلة تطوير المنتجات"
          date="dec 8 - dec 21"
          start_date="12-08-2024"
          dir="ltr"
        />

        <TimeLineCard
          icon="./imgs/speakers/male_icon.svg"
          title="المرحلة الخامسة"
          description="بداية مرحلة تمكين المتأهلين"
          date="05-01-2025"
          start_date="05-01-2025"
          isLast={true}
        />
      </TimelineComp>
    </div>
  );
};

export default Timeline;
