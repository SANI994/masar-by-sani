import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { RegisterButton } from "@/components/Buttons";
import Link from "next/link";
import React from "react";

const Aside = styled("aside", {
  shouldForwardProp: (prop) => prop !== "show",
})<{ show?: boolean }>(({}) => ({
  backgroundColor: "rgba(255,255,255,1)",
  height: "95vh",
  position: "fixed",
  width: "100vw",
  zIndex: 99,
  display: "block",
  top: "90px",
  left: 0,
}));

interface MobileSideProps {
  show: boolean;
  onSelectSection?: () => void;
}

const MobileSideMenu = ({ show, onSelectSection }: MobileSideProps) => {
  return (
    <Slide direction="left" dir="rtl" timeout={600} in={show} mountOnEnter unmountOnExit>
      <Aside>
        
       
        <div className="flex justify-center mt-20">
          <RegisterButton variant="secondry" classes="w-[90vw] h-[48px]" />
        </div>

        <ul onClick={onSelectSection} className="flex flex-col items-start my-12 mx-10 gap-6 text-[16px] font-medium">
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#about">عن المسابقة</Link>
          </li>
          <li>
            <Link href="#goals">الأهداف</Link>
          </li>
          <li>
            <Link href="#tracks">المسارات</Link>
          </li>
          <li>
            <Link href="#timeline">مراحل المشاركة</Link>
          </li>
          <li>
            <Link href="#terms">الشروط</Link>
          </li>
        </ul>
      </Aside>
    </Slide>
  );
};

export default MobileSideMenu;
