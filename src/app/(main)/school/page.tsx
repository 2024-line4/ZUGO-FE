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
      <SearchAndFilter />
      <SchoolList />
    </>
  );
}
