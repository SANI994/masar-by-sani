'use client';
import React, { useEffect } from 'react';
import { RegisterButton } from '@/components/Buttons';
import MobileSideMenu from './MobileSideMenu';
import Image from 'next/image';

type NavBarProps = {
  selectedSection?:string;
  showLogoOnly?:boolean
}

export default function Navbar({selectedSection ,showLogoOnly}:NavBarProps) {
  const [showSideMenu, setShowSideMenu] = React.useState(false)
  const [currentSection, setCurrentSection] = React.useState("")
  useEffect(()=>{
    setCurrentSection(selectedSection || "")
  },[selectedSection])
  
  const toggleSideMenu = () => {
    setShowSideMenu(showSideMenu ? false : true)
  }
  return (
    <header className='fixed z-50 w-full'> 
    <nav className={`flex items-center justify-between py-5 px-6 md:px-12 bg-white text-[#707070]`}>
      {!showLogoOnly && <div className='hidden md:flex items-center'>
        <div className='text-xl'>
          <RegisterButton variant='secondry' classes='w-[156px]  h-[48px]' />
        </div>
      </div> }
     

     <MobileSideMenu showLogoOnly show={showSideMenu} onSelectSection={()=> setShowSideMenu(false)} />
     
     { <div dir='rtl' className='hidden md:flex items-center w-full justify-around text-[#334961]'>
        <div className='flex flex-col items-center gap-2'>
        <a href='#' className={`nav-link ${currentSection == "" ? "text-[#334961]":"" }`}>
          الرئـيـسـية
        </a>
        {/* {currentSection == "" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}
        </div>


        <div className='flex flex-col items-center gap-2'>
        <a href='#about' className={`nav-link ${currentSection == "about" ? "text-[#334961]":"" }`}>
          عـن البرنامج
        </a>
        {/* {currentSection == "about" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}
        </div>
        <div className='flex flex-col items-center gap-2'>
        <a href='#goals' className={`nav-link ${currentSection == "goals" ? "text-[#334961]":"" }`}>
          المراحل
        </a>
        {/* {currentSection == "goals" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}
        </div>
        <div className='flex flex-col items-center gap-2'>
        <a href='#tracks' className={`nav-link ${currentSection == "tracks" ? "text-[#334961]":"" }`}>
          الــمــسارات
        </a>
        {/* {currentSection == "tracks" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}
        </div>
       
        <div className='flex flex-col items-center gap-2'>
        <a href='#timeline' className={`nav-link ${currentSection == "timeline" ? "text-[#334961]":"" }`}>
          الخط الزمني 
        </a>
        {/* {currentSection == "timeline" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}
        </div>

        <div className='flex flex-col items-center gap-2'>
        <a href='#terms' className={`nav-link ${currentSection == "terms" ? "text-[#334961]":"" }`}>
          الشــروط
        </a>

        {/* {currentSection == "terms" && <Image src="/imgs/icons/magnet.svg" width={10} height={10} alt="selector" />}  */}

        </div>
      </div>}
     
      <div className='flex justify-between items-start w-full md:w-[204px]'>
      <div className={`flex items-center`}>
        <a href='/'>
        <Image src='/imgs/masar_logo_green_dark.svg' width={180} height={62} alt='Logo' className='logo w-[190px]' />
        </a>
      </div>
      <div className='flex md:hidden items-center' onClick={toggleSideMenu}>
       {!showSideMenu && <Image src='./icons/black-burger-button.svg' height={32} width={27} alt='menu' className='block md:hidden' />}
        
        {showSideMenu && <Image src='./icons/close.svg' width={32} height={27} alt='close' className='block md:hidden' />}
        
        </div>
        </div>
    </nav>
    </header>
  );
}
