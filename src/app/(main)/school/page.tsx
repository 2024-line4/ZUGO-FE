import SearchAndFilter from "../_components/(searchAndFilter)/searchAndFilter";
import SchoolList from "./_components/SchoolList";

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
