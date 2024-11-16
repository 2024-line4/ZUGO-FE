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
import Event3 from "@/../public/main_event3.png";
import Event2 from "@/../public/main_event2.png";
import Event1 from "@/../public/main_event1.png";


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
          {/* 이벤트 1 */}
          <div
            className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]"
            style={{
              backgroundImage: `url(${Event1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* 이벤트 2 */}
          <div
            className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]"
            style={{
              backgroundImage: `url(${Event2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* 이벤트 3 */}
          <div
            className="bg-white p-4 shadow rounded-[20px] h-56 flex items-center justify-center border border-[#222499]"
            style={{
              backgroundImage: `url(${Event3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
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
      <section
        className={`mt-12 ${styles.adSection} mx-auto`}
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="flex justify-between items-center mx-auto max-w-[1200px]">
          {/* Buttons Section */}
          <div className="grid grid-cols-2 gap-[30px]">
            <button
              className={styles.footerButton}
              onClick={() => window.open("https://www.skyscanner.co.kr/", "_blank")}
            >
              항공권 사이트 바로가기
            </button>
            <button
              className={styles.footerButton}
              onClick={() => window.open("https://www.visa.go.kr/", "_blank")}
            >
              비자 사이트 바로가기
            </button>
            <button
              className={styles.footerButton}
              onClick={() => window.open("https://www.kises.co.kr/", "_blank")}
            >
              여행사 바로가기
            </button>
            <button
              className={styles.footerButton}
              onClick={() =>
                window.open(
                  "https://www.coei.com/index.php?utm_source=google_mo&utm_medium=cpc&utm_campaign=CSAF&utm_term=%EC%A2%85%EB%A1%9C%EC%9C%A0%ED%95%99%EC%9B%90&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPtv2aj-CndPnx5mVw0jpNwTPsPixNVI4o9jCdDX5I35pFfPe7H-tiwaAi9pEALw_wcB",
                  "_blank"
                )
              }
            >
              유학원 바로가기
            </button>
          </div>

          {/* Ad Section */}
          <div className="flex flex-col items-center ml-12"> {/* 간격을 ml-6에서 ml-12로 변경 */}
            <Image src={AdImg} alt="Google AdSense" width={200} height={100} />
            <p className="text-sm text-gray-500 mt-4">구글 애드센스 광고</p>
          </div>
        </div>
      </section>

    </div>
  );
}
