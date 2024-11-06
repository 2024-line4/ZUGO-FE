"use client";

import { useGetSchool } from "@/app/hooks/useGetSchool";
import { useSearchParams } from "next/navigation";

export default function SchoolList() {
  const searchParams = useSearchParams();
  const country: string | null = searchParams.get("country");
  const region: string | null = searchParams.get("region");

  const { data } = useGetSchool({ country, region });
  console.log(data?.pages[0].school);
  return (
    <ul className="mt-[35px]">
      {data?.pages[0].school.map((sch) => <li key={sch.id}></li>)}
    </ul>
  );
}
