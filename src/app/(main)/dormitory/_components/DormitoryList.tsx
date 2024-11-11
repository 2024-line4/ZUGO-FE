"use client";

import { useGetDormitory } from "@/hooks/queries";
import { useSearchParams } from "next/navigation";
import SelectSort from "../../_components/(searchAndFilter)/SelectSort";
import ListCard from "../../_components/ListCard";
import { DormitoryCardType } from "@/types/DormitoryType";

export default function DormitoryList() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const region = searchParams.get("region") || "";

  const { data, isFetchingNextPage } = useGetDormitory({ country, region });
  const sortedData = data?.pages
    .flatMap((page) => page.dormitory)
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <SelectSort totalData={data?.pages[0].totalData!} />
      <ul className="grid min-h-[350px] min-w-[1050px] grid-cols-4 gap-[37px]">
        {sortedData?.map((dor) => (
          <ListCard<DormitoryCardType & { type: "dormitory" }>
            key={dor.id}
            data={{ ...dor, type: "dormitory" }}
          />
        ))}
      </ul>
    </>
  );
}
