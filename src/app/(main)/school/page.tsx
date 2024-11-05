import SearchAndFilter from "../_components/(searchAndFilter)/searchAndFilter";
import SchoolList from "./_components/SchoolList";

type Props = {
  searchParams: Promise<{
    country?: string;
    region?: string;
  }>;
};

export default async function School({ searchParams }: Props) {
  const { country, region } = await searchParams;
  return (
    <>
      {/* 학교 정보 페이지 */}
      {/* 필터 부분 */}
      <SearchAndFilter />
      {/* 학교 리스트 부분 */}
      <SchoolList country={country} region={region} />
    </>
  );
}
