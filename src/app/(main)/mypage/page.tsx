import { Metadata } from "next";
import style from "./mypage.module.scss";
import Image from "next/image";
import ProfilePic from "@/../public/mypage_profile.png";
import NextIcon from "@/../public/mypage_ic_next.svg";
import EditIcon from "@/../public/mypage_ic_edit.svg";

// 이 부분은 로그인/회원가입이 생긴다면 동적 경로 바인딩 함수 async generateMetadata 바꿔야 합니다
export const metadata: Metadata = {
  title: "My Page",
  description: "교환학생 플랫폼 ZUGO My Page",
};

const profileData = [
  { label: "이 름", value: "함서형" },
  { label: "나 이", value: "만 20세" },
  { label: "학 교", value: "성신여자대학교" },
  { label: "학 번", value: "20231049" },
];

const scrapData = [
  {
    title: "프랑크푸르트 리터 대학교",
    description: "프랑크푸르트 리터 대학교",
    location: "독일 헤센주 프랑크푸르트암마인",
    homepage: "https://www.goethe-university-frankfurt.de/en?locale=en",
  },
  {
    title: "베를린 자유대학교",
    description: "프랑크푸르트 리터 대학교",
    location: "독일 베를린",
    homepage: "https://www.fu-berlin.de/",
  },
];

const ProfileSection = ({ profileData }: { profileData: { label: string; value: string }[] }) => (
  <section className={style.myprofileSection}>
    <div className={style.profileContainer}>
      <Image src={ProfilePic} alt="Profile Picture" width={100} height={100} className={style.profileImage} />
      <div className={style.profileInfo}>
        {profileData.map((item, index) => (
          <p key={index}>
            <span className={style.profileLabel}>{item.label}</span>: {item.value}
          </p>
        ))}
      </div>
      <div className={style.editIconContainer}>
        <Image src={EditIcon} alt="Edit Icon" width={24} height={24} className={style.editIcon} />
      </div>
    </div>
  </section>
);


const ScrapItem = ({ scrap }: { scrap: { title: string; description: string; location: string; homepage: string } }) => (
  <div className={style.scrapItem}>
    <div className={style.scrapContent}>
      <p className={style.scrapTitle}>{scrap.title}</p>
      <p>{scrap.description}</p>
      <p>위치: {scrap.location}</p>
      <p>
        홈페이지:{" "}
        <a href={scrap.homepage} target="_blank" rel="noopener noreferrer">
          {scrap.homepage}
        </a>
      </p>
    </div>
    <Image src={NextIcon} alt="Next Icon" width={24} height={24} className={style.arrowIcon} />
  </div>
);

export default function MyPage() {
  return (
    <>
      <ProfileSection profileData={profileData} />
      <section className={style.scrapSection}>
        <h2 className={style.sectionTitle}>스크랩</h2>
        {scrapData.map((scrap, index) => (
          <ScrapItem key={index} scrap={scrap} />
        ))}
      </section>
    </>
  );
}
