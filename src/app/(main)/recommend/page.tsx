import { Metadata } from "next";
import style from "./recommend.module.scss";
import Filter from "./_components/filter";

export const metadata: Metadata = {
  title: "Recommend",
  description: "교환학생 플랫폼 ZUGO recommend",
};

export default function Recommend() {
  return (
    <>
      <section className={style.searchSection}></section>
      <Filter />
      <section></section>
    </>
  );
}
