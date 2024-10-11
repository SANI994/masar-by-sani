"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-white bg-[#334961] pt-[29px] mt-8 w-full"
      dir="rtl"
      style={{ backgroundImage: `url(/footer-background.svg)` }}
    >
      <Image src="/imgs/masar_logo_green.png" width={186} height={186} alt="white logo" />
      <ul className="flex justify-center gap-8 md:gap-0 md:justify-around flex-wrap list-disc w-full mt-[31px] mb-[51px]">
        <li>
          <Link href="#tracks">المسارات</Link>
        </li>
        <li>
          <Link href="#goals">المراحل</Link>
        </li>
        <li>
        <Link href="#about">
          عن البرنامج
          </Link>
        </li>
        <li>
        <Link href="#timeline"> 
          الخط الزمني
          </Link>
          </li>
        <li>
        <Link href="#faq">
          الاسئلة والاجوبة
          </Link>
          </li>
          
      </ul>
      <hr className="w-full bg-white h-[1px]" />

      <div className="flex justify-center gap-8 md:gap-0 md:justify-between flex-wrap w-full px-12 text-xs my-[20px]">
        <div className="flex w-full justify-between md:justify-around">
          <p>
            <Link href="#terms">الشروط</Link>
            </p>
            <Link href={"/register"}>
            التسجيل في البرنامج
             </Link>
          
        </div>

        {/* <p className="w-full text-center mt-8">كل الحقوق محفوظة الى هاكاثون المأكولات والمشروبات 2024</p> */}
      </div>
    </footer>
  );
}
