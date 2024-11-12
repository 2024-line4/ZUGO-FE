"use client";

import { useGetSchool } from "@/hooks/queries";
import { useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { SyncLoader } from "react-spinners";
import defineSort from "../_lib/defineSort";
import SelectSort from "../../_components/(searchAndFilter)/SelectSort";
import { SchoolCardType } from "@/types/SchoolType";
import ListCard from "../../_components/ListCard";

export default function SchoolList() {
  const searchParams = useSearchParams();
  const country: string = searchParams.get("country") || "";
  const region: string = searchParams.get("region") || "";
  const loader = useRef<IntersectionObserver | null>(null);

  const { data, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSchool({
      country,
      region,
    });

  const flatData = defineSort(
    data?.pages.flatMap((page) => page.schools) || [],
    searchParams.get("sortBy") || "students",
  );

  const loadNextPageWithDelay = useCallback(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 1000);
  }, [fetchNextPage]);

  const observer = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching || isFetchingNextPage) return;
      if (loader.current) loader.current.disconnect();
      loader.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          loadNextPageWithDelay();
        }
      });

      if (node) loader.current.observe(node);
    },
    [isFetching, isFetchingNextPage, fetchNextPage, hasNextPage],
  );

  return (
    <>
      <SelectSort totalData={data?.pages[0].totalData!} />
      <ul className="grid min-h-[350px] min-w-[1050px] grid-cols-4 gap-[37px]">
        {flatData?.map((sch) => <ListCard key={sch.id} data={sch} />)}
      </ul>
      <div
        ref={observer}
        className="my-3 flex min-w-[1080px] items-center justify-center text-2xl"
      >
        {isFetchingNextPage ? (
          <></>
        ) : (
          hasNextPage && (
            <SyncLoader
              color="#36377d"
              size={10}
              loading
              speedMultiplier={0.8}
            />
          )
        )}
      </div>
    </>
  );
}
