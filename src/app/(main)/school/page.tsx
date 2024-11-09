import { Metadata } from "next";
import SearchAndFilter from "../_components/(searchAndFilter)/searchAndFilter";
import SchoolList from "./_components/SchoolList";

export const metadata: Metadata = {
  title: "School",
  description: "교환학생 플랫폼 ZUGO School",
};

export default async function School() {
  return (
    <>
      {/* 학교 정보 페이지 */}
      {/* 필터 부분 */}
      <SearchAndFilter />
      {/* 학교 리스트 부분 */}
      <SchoolList />
    </>
  );
}
