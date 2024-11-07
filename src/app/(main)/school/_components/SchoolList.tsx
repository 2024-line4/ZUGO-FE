"use client";

import { useGetSchool } from "@/hooks/useGetSchool";
import { useSearchParams } from "next/navigation";
import SchoolCard from "./SchoolCard";
import { Fragment, useCallback, useRef } from "react";
import { SyncLoader } from "react-spinners";

export default function SchoolList() {
  const searchParams = useSearchParams();
  const country: string | null = searchParams.get("country");
  const region: string | null = searchParams.get("region");
  const loader = useRef<IntersectionObserver | null>(null);

  const { data, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSchool({
      country,
      region,
    });

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
      <ul className="mt-[35px] grid min-h-[350px] min-w-[1050px] grid-cols-4 gap-[37px]">
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.school.map((sch) => (
              <SchoolCard key={sch.id} sch={sch} />
            ))}
          </Fragment>
        ))}
      </ul>
      <div
        ref={observer}
        className="my-3 flex min-w-[1070px] items-center justify-center text-2xl"
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
