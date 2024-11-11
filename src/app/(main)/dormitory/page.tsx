import Link from "next/link";
import SearchAndFilter from "../_components/(searchAndFilter)/searchAndFilter";
import { Metadata } from "next";
import DormitoryList from "./_components/DormitoryList";

export const metadata: Metadata = {
  title: "Dormitory",
  description: "교환학생 플랫폼 ZUGO Dormitory",
};

export default function Dormitory() {
  return (
    <>
      <SearchAndFilter />
      <DormitoryList />
    </>
  );
}
