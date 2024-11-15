"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./mainPage.module.scss";
import ZUGOLogo from "@/../public/main_logo.png";
import AdImg from "@/../public/main_advertising_google.png";
import EmojiIcon from "@/../public/logo-icon.png";
import YaleLogo from "@/../public/main_university.png";
import Unviersity2Logo from "@/../public/main_university2.png";
import Unviersity3Logo from "@/../public/main_university3.png";
import Btn1 from "@/../public/main_btn1.svg";
import Btn2 from "@/../public/main_btn2.svg";
import Btn3 from "@/../public/main_btn3.svg";

const universities = [
  { name: "Yale University", image: YaleLogo },
  { name: "Harvard University", image: Unviersity2Logo },
  { name: "MIT", image: Unviersity3Logo },
];

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? universities.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === universities.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto px-2">
      {/* Main Banner and Popular Universities Slider */}
      <section className={`mt-8 ${styles.bannerContainer}`}>
        <div className={styles.bannerText}>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-4">
                <Image src={EmojiIcon} alt="Emoji Icon" width={90} height={90} />
                <p className="text-[40px] font-semibold" style={{ color: "#000260" }}>
                  AI에게 물어봐!
                </p>
              </div>
              <p className="text-[40px] font-semibold mt-2" style={{ color: "#000260" }}>
                내게 맞는 학교를 고르는
              </p>
              <p className="text-[40px] font-bold" style={{ color: "#000260" }}>
                "가장 확실한 방법"
              </p>
            </div>
            <Image src={ZUGOLogo} alt="ZUGO Logo" width={270} height={135} className="ml-4" />
          </div>
        </div>


        {/* University Slider */}
        <div className={styles.universitySliderContainer}>
          <div className={styles.sliderTitle}>실시간 인기학교</div>
          <div className={styles.sliderBox}>
            <Image
              src={universities[currentIndex].image}
              alt={universities[currentIndex].name}

              className={`${styles.universityImage} rounded-lg shadow`}
            />
            <div className={styles.sliderControls}>
              <button onClick={handlePrev}>&lt;</button>
              <span className="text-sm text-gray-600">
                {currentIndex + 1} / {universities.length}
              </span>
              <button onClick={handleNext}>&gt;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className={`mt-16 ${styles.eventSection}`}>
        <h3 className="text-2xl font-semibold text-black">EVENT</h3>
        <div className="mt-4 grid grid-cols-3 gap-16">
          <div className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]">이벤트 1</div>
          <div className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]">이벤트 2</div>
          <div className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]">이벤트 3</div>
          {/* <div className="bg-white p-4 shadow rounded-lg h-56 flex items-center justify-center">이벤트 3</div> */}
        </div>
      </section>

      {/* Button Links */}
      <section className={`mt-12 ${styles.buttonLinks}`}>
        <Link href="/recommend" passHref>
          <button className={styles.customButton}>
            <Image src={Btn1} alt="Icon" />
          </button>
        </Link>
        <Link href="/school" passHref>
          <button className={styles.customButton}>
            <Image src={Btn2} alt="Icon" />
          </button>
        </Link>
        <Link href="/school" passHref>
          <button className={styles.customButton}>
            <Image src={Btn3} alt="Icon" />
          </button>
        </Link>
      </section>


      {/* Ad Section */}
      <section className={`mt-12 ${styles.adSection} mx-auto`} style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex items-center justify-center w-full">
          <Image src={AdImg} alt="Google AdSense" width={200} height={100} />
          <p className="text-sm text-gray-500 ml-4">구글 애드센스 광고</p>
        </div>
      </section>


      {/* Footer Section */}
      <section className={`mt-20 flex justify-center gap-[130px]`}>
        <button className={styles.footerButton}>항공권 사이트 바로가기</button>
        <button className={styles.footerButton}>비자 사이트 바로가기</button>
      </section>
    </div>
  );
}
