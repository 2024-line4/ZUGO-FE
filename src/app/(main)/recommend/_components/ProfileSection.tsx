"use client"

import React, { useState } from "react";
import Image from "next/image";
import style from "./userrecommend.module.scss";
import { fetchRecommendations } from "../_lib/getSearch";
import ProfilePic from "@/../public/mypage_profile.png";
import SearchIcon from "@/../public/recommend_ic_search.svg";
import EditIcon from "@/../public/mypage_ic_edit.svg";

const ProfileSection: React.FC = () => {
  const [country, setCountry] = useState<string>(""); // 선호 국가
  const [major, setMajor] = useState<string>(""); // 학과
  const [university, setUniversity] = useState<string>(""); // 출신학교
  const [recommendations, setRecommendations] = useState<string[]>([]); // 추천 결과
  const [showResults, setShowResults] = useState<boolean>(false); 
  
  const handleSearch = async () => {
    // if (!country || !major || !university) {
    //   alert("모든 필드를 입력해주세요!");
    //   return;
    // }

    const result = await fetchRecommendations({ country, major, university });
    if (result) {
      setRecommendations(result);
      setShowResults(true);s
    } else {
      alert("추천 검색에 실패했습니다.");
    }
  };

  return (
    <section className={style.myprofileSection}>
      <div className="flex-shrink-0">
        <Image src={ProfilePic} alt="Profile Picture" className={style.profileImage} />
        <p className="mt-2 text-center text-sm font-semibold">Whale님</p>
      </div>
      <div className="ml-6 flex flex-col space-y-4">
        {/* 선호 국가 */}
        <div className="flex items-center">
          <label className="w-20 text-sm font-medium text-gray-700">선호국가:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="ex) 288 (가나)"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {/* 출신학교 */}
        <div className="flex items-center">
          <label className="w-20 text-sm font-medium text-gray-700">출신학교:</label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="ex) SKKU"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {/* 학과 */}
        <div className="flex items-center">
          <label className="w-20 text-sm font-medium text-gray-700">학 &nbsp;&nbsp;&nbsp;과:</label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="ex) MATH"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center">
           <label className="w-20 text-sm font-medium text-gray-700">학 &nbsp;&nbsp;&nbsp;년:</label>
           <input
            type="text"
            placeholder="입력하세요"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        
      </div>
      {/* 검색 버튼 또는 결과 표시 */}
      {!showResults ? (
        <div className="ml-auto">
          <button className={style.searchBtn} onClick={handleSearch}>
            AI 추천 검색하기
            <Image src={SearchIcon} alt="Icon" width={20} height={20} />
          </button>
        </div>
      ) : (
        <div className={style.resultBox}>
          <h3 className={style.resultTitle}>AI 추천 결과</h3>
          <ul className={style.resultList}>
            {recommendations.map((school, index) => (
              <li key={index} className={style.resultItem}>
                {school}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={style.editIconContainer}>
         <Image src={EditIcon} alt="Edit Icon" width={24} height={24} className={style.editIcon} />
      </div>
    </section>
  );
};

export default ProfileSection;
