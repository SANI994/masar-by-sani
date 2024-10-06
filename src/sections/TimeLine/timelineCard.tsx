"use client";
/* eslint-disable */
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem from "@mui/lab/TimelineItem";
import { motion } from "framer-motion";

type TimeLineCardProps = {
  icon: string;
  title: string;
  description: string;
  date: string;
  start_date:string;
  isLast?:boolean
  dir?: "rtl" | "ltr"
}

export default function TimeLineCard({description,start_date,isLast}: TimeLineCardProps){
  const options:any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };  
  const dateTemp = new Date(start_date).toLocaleDateString("ar-eg",options)
      return (
        <TimelineItem className="flex flex-row text-lg" >
       
        <TimelineOppositeContent style={{fontFamily:'inherit',fontSize:'24px'}} className="font-light" color="text.secondary">
          {dateTemp}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <motion.div initial={{scale:1}}  animate={{ scale: 1.5 }}
  transition={{ repeat: Infinity, duration: 2 }}>
          <TimelineDot color={"success"} sx={{width:'14px' ,height:"14px"}} />
          </motion.div>
        {!isLast && <TimelineConnector sx={{height:'80px'}} />}  
        </TimelineSeparator>
        <TimelineContent style={{fontFamily:'inherit',fontSize:'24px'}} className="font-semibold" >{description}</TimelineContent>
      
        </TimelineItem>
      )
}