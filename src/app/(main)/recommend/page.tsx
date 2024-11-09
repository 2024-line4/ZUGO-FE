import { Metadata } from "next";
import style from "./recommend.module.scss";

export const metadata: Metadata = {
  title: "Recommend",
  description: "교환학생 플랫폼 ZUGO recommend",
};

export default function Recommend() {
  return (
    <>
      <section className={style.searchSection}></section>
      <section></section>
    </>
  );
}
