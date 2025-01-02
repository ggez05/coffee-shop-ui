"use client";
/* eslint-disable react/no-unescaped-entities */

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import Button from "./Button";
function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="bg-theme-first-color-alt flex justify-center py-16 items-center flex-col-reverse md:flex-row px-6 gap-y-7 pb-40">
      <div data-aos="fade-right">
        <Image
          alt="home-coffee"
          src={"/image/home-coffee.svg"}
          width={713}
          height={790}
        />
      </div>
      <div className="flex flex-col gap-y-6 md:w-[447px]" data-aos="fade-left">
        <p className="text-theme-second-color text-sm md:text-lg font-medium font-poppins text-center md:text-start">
          CRAFTED TO PERFECTION
        </p>
        <h1 className="font-pacifico text-[32px]  md:text-[52px] text-white text-center md:text-start">
          Experience the true taste of exceptional coffee.
        </h1>
        <p className="font-poppins text-sm md:text-lg font-normal text-white text-center md:text-start">
          Every handpicked bean tells a story of our dedication to Peruvian
          coffee growers, delivering rich, flavorful moments straight to your
          cup.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button text="Get Started" icon iconLink="/icon/right.svg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
