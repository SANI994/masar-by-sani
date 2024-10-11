"use client";
/* eslint-disable */
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem from "@mui/lab/TimelineItem";
import { motion } from "framer-motion";
import { dateStringToISO } from "@/app/constants";

type TimeLineCardProps = {
  icon: string;
  title: string;
  description: string;
  date: string;
  start_date: string;
  isLast?: boolean;
  dir?: "rtl" | "ltr";
};

export default function TimeLineCard({
  description,
  start_date,
  isLast,
}: TimeLineCardProps) {
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTemp = new Date(dateStringToISO(start_date)).toLocaleDateString("ar-eg", options);
  const isDatePassed = new Date() > new Date(dateStringToISO(start_date));
  return (
    <TimelineItem className="flex flex-row w-[70vw]">
      <TimelineOppositeContent
        style={{ fontFamily: "inherit"}}
        className={` ${isDatePassed ? 'opacity-50 font-light':'font-semibold'} text-end text-[18px] md:text-2xl`}
        color="text.secondary"
      >
        {dateTemp}
      </TimelineOppositeContent>

      <TimelineSeparator>
        {!isDatePassed ? (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <TimelineDot
              
              sx={{ width: "14px", height: "14px", backgroundColor:"#5CECCE" }}
            />
          </motion.div>
        ) : (
          <div>
            <TimelineDot
              color={"grey"}
              sx={{ width: "14px", height: "14px" }}
            />
          </div>
        )}

        {!isLast && <TimelineConnector sx={{ height: "80px",opacity: isDatePassed ? 0.5:1 }} />}
      </TimelineSeparator>
      <TimelineContent
        style={{ fontFamily: "inherit"}}
        className={`${isDatePassed ? 'opacity-50 font-light':'font-semibold '} text-[18px] md:text-2xl`}
      >
        {description}
      </TimelineContent>
    </TimelineItem>
  );
}
