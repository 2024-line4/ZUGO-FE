import Link from "next/link";
import SearchAndFilter from "../_components/(searchAndFilter)/searchAndFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dormitory",
  description: "교환학생 플랫폼 ZUGO Dormitory",
};

export default function Dormitory() {
  return (
    <>
      <SearchAndFilter />
      <Link href="/dormitory/ttasdast">테스트 페이지로 이동</Link>
    </>
  );
}
