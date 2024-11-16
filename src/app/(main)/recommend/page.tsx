import { Metadata } from "next";
import style from "./recommend.module.scss";
import Filter from "./_components/filter";
import RecommendList from "./_components/RecommendList";
import ProfileSection from "./_components/ProfileSection";

export const metadata: Metadata = {
  title: "Recommend",
  description: "교환학생 플랫폼 ZUGO recommend",
};

export default function Recommend() {
  return (
    <>
      <ProfileSection />
      <Filter />
      {/* <RecommendList /> */}
      <section></section>
    </>
  );
}