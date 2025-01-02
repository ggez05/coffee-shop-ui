"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="bg-white rounded-t-[54px] md:rounded-t-[104px] -mt-28 flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] gap-y-10 gap-x-20">
      <div className="w-full flex flex-col gap-y-6 text-center lg:text-start">
        <h1
          className="text-theme-title-color font-pacifico text-[24px] xl:text-[48px]"
          data-aos="zoom-out-right"
        >
          Coffee is the perfect morning companion – keeping you sharp, focused,
          and ready to take on the day.
        </h1>
      </div>
      <div
        className="w-full flex justify-center lg:justify-start"
        data-aos="flip-right"
      >
        <Image
          alt=""
          src={"/image/testimonial-coffee.svg"}
          width={550}
          height={336}
        />
      </div>
    </div>
  );
}

export default Banner;
