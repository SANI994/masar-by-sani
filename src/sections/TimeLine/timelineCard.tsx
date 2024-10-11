"use client";
/* eslint-disable */
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { motion } from "framer-motion";
import { dateStringToISO, isToday } from "@/app/constants";

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
  const dateTemp = new Date(start_date.replace(/-/g, "/")).toLocaleDateString("ar-eg", options);
  const isDatePassed = new Date() > new Date(start_date.replace(/-/g, "/"));
  const isDateToday = isToday(new Date(start_date.replace(/-/g, "/")))
  return (
    <section className="flex flex-row justify-center gap-6 w-full">
      <div
        className={` ${isDatePassed && !isDateToday ? 'opacity-50 font-light':'font-semibold'} w-full text-end text-[18px] md:text-2xl`}
        color="text.secondary"
      >
        {dateTemp}
      </div>

      <TimelineSeparator>
        {!isDatePassed || isDateToday ? (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <TimelineDot
              
              sx={{ width: "14px", height: "14px", backgroundColor: isDateToday? "#E9D502":"#5CECCE" }}
            />
          </motion.div>
        ) : (
          <div>
            <TimelineDot
            
              sx={{ width: "14px", height: "14px", backgroundColor:isDateToday ? "#E9D502":'grey' }}
            />
          </div>
        )}

        {!isLast && <TimelineConnector sx={{ height: "80px",opacity: isDatePassed && !isDateToday ? 0.5:1 }} />}
      </TimelineSeparator>
      <div
        className={`w-full ${isDatePassed && !isDateToday? 'opacity-50 font-light':'font-semibold '} text-[18px] md:text-2xl`}
      >
        <p>
        {description}
        </p>
      </div>
    </section>
  );
}
