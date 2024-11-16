import { Metadata } from "next";
import style from "./recommend.module.scss";
import Filter from "./_components/filter";
import RecommendList from "./_components/RecommendList";

export const metadata: Metadata = {
  title: "Recommend",
  description: "교환학생 플랫폼 ZUGO recommend",
};

export default function Recommend() {
  return (
    <>
      <section className={style.searchSection}>
        <div className="grid grid-cols-3 place-content-center justify-items-center">
          <div className="grid grid-cols-1">
            <div>profile Img</div>
            <div>user name</div>
          </div>
          <div className="grid grid-cols-1">
            <div>출신 학교 :</div>
            <div>학과 :</div>
            <div>학년 :</div>
            <div>선호 국가 :</div>
          </div>
          <div className="grid grid-cols-1">
            <div>AI recommend</div>
          </div>
        </div>
      </section>
      <Filter />
      <RecommendList />
      <section></section>
    </>
  );
}
