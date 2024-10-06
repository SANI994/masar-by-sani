
'use client';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import styles from './faq.module.scss';
import { HACKATHON_QUESTIONS } from '@/app/constants';
import React from 'react';



export default function Questions() {
  const [expanded, setExpanded] = React.useState<boolean>(false);

      return (
            <section className='flex flex-col gap-[10px] mb-[109px] mx-6 md:mx-12' dir='rtl'>
            {HACKATHON_QUESTIONS.map((elem,i)=>{
                 
                 const handleExpand = ()=>{
                  setExpanded(expanded ? false:true);
                 }
                  return (
            <MuiAccordion key={i} disableGutters elevation={0} square className={styles.accordion}   >
                    <MuiAccordionSummary aria-controls="panel1d-content" onClick={handleExpand} expandIcon={<img src={expanded ? "./icons/arrow-up.svg" : "./icons/arrow-down.svg"} width={12} height={12} alt='arrow' />}>
                      <p className='text-[#828080] text-[14px] md:text-[20px]'>السؤال: { elem.question}</p>
      
                    </MuiAccordionSummary>
                    <MuiAccordionDetails>
                      <p className='text-black text-[14px] md:text-[20px] font-semibold'>
                       الجواب: {elem.answer}
                      </p>
                    </MuiAccordionDetails>
                  </MuiAccordion>
                  )
               })}
               </section>
      )
}