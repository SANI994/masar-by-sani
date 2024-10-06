"use client";

export default function Sponsers() {
  const IMAGES_LIST = [
    {
      src: "./imgs/sponsers/misk.svg",
      alt: "partner logo",
      width:240,
      height:76,
    }
  ];

  return (
    <section id="#" className=" py-2 mt-[30px] md:mt-19" dir="rtl">
       <div className="flex flex-col gap-4 items-center mb-14 text-center">
        <h1 className="text-[#334961] text-[40px] font-semibold">
          {" "}
        الرعاة
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 md:gap-20 sm:gap-10 justify-center my-[15px]">
        {IMAGES_LIST.map((img, i) => {
          return <img width={img.width} height={img.height} key={i} src={img.src} alt={img.alt} />;
        })}
      </div>
    </section>
  );
}
