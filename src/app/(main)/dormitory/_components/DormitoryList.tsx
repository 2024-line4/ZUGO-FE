"use client";

import { useGetDormitory } from "@/hooks/queries";
import { useSearchParams } from "next/navigation";
import SelectSort from "../../_components/(searchAndFilter)/SelectSort";
import ListCard from "../../_components/(ListUp)/ListCard";
import NoData from "../../_components/(ListUp)/NoData";
import Loading from "../../_components/Loading";
import { useCallback, useRef } from "react";

export default function DormitoryList() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const region = searchParams.get("region") || "";
  const loader = useRef<IntersectionObserver | null>(null);

  const {
    data,
    isFetchingNextPage,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetDormitory({
    country,
    region,
  });
  const sortedData =
    data?.pages
      .flatMap((page) => page.dormitory)
      .sort((a, b) => a.name.localeCompare(b.name)) || [];

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
      <SelectSort totalData={data?.pages[0].totalData!} />
      {sortedData?.length > 0 ? (
        <ul className="grid min-h-[350px] min-w-[1050px] grid-cols-4 gap-[37px]">
          {sortedData?.map((dor) => <ListCard key={dor.id} data={dor} />)}
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
