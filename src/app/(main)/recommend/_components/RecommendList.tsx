"use client";

import { useGetRecommend } from "@/hooks/queries";
import { useSearchParams } from "next/navigation";
import SelectSort from "../../_components/(searchAndFilter)/SelectSort";
import ListCard from "../../_components/(ListUp)/ListCard";
import NoData from "../../_components/(ListUp)/NoData";
import Loading from "../../_components/Loading";
import { useCallback, useRef } from "react";
import Link from "next/link";

export default function RecommendList() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const region = searchParams.get("region") || "";
  const major = searchParams.get("major") || "";
  const univ = "SKKU";
  const loader = useRef<IntersectionObserver | null>(null);

  const {
    data,
    isFetchingNextPage,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetRecommend({
    country,
    region,
    major,
    univ,
  });
  const sortedData =
    data?.pages[0].sort((a, b) => a.id.localeCompare(b.id)) || [];
  console.log(data);
  const fetchWithDelay = useCallback(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 1000);
  }, []);

  const observer = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching || isFetchingNextPage) return;
      if (loader.current) loader.current.disconnect();

      loader.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchWithDelay();
        }
      });

      if (node) loader.current.observe(node);
    },
    [isFetching, isFetchingNextPage, fetchNextPage, hasNextPage],
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <SelectSort totalData={data?.pages.length} /> */}
      {sortedData?.length > 0 ? (
        <ul className="grid min-h-[350px] min-w-[1050px] grid-cols-4 gap-[37px]">
          {sortedData?.map((school) => (
            <li key={school.id}>
              <Link href={`/school/${school.id}`}>
                <div className="h-[68.2%] w-full rounded-t-[40px] bg-white">
                  <img
                    className="h-full max-h-[300px] w-full object-contain"
                    src={school.img_info}
                    alt={`${school.id}.img`}
                  />
                </div>
                <div className="mb-[15px] ml-[16px] flex h-[90px] flex-col justify-center text-[23px]">
                  <h2 className="text-blue1">
                    {school.info.meta_data.location}
                  </h2>
                  <span>{school.id}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <NoData />
      )}
      <div
        ref={observer}
        className="my-3 flex min-w-[1080px] items-center justify-center text-2xl"
      />
    </>
  );
}
