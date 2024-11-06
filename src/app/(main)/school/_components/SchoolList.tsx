"use client";

import { useGetSchool } from "@/hooks/useGetSchool";
import { useSearchParams } from "next/navigation";
import SchoolCard from "./SchoolCard";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";

export default function SchoolList() {
  const searchParams = useSearchParams();
  const country: string | null = searchParams.get("country");
  const region: string | null = searchParams.get("region");
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { data, isFetching, hasNextPage, fetchNextPage } = useGetSchool({
    country,
    region,
  });

  console.log(data);

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      <ul className="mt-[35px] grid min-w-[1050px] grid-cols-4 gap-[37px]">
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.school.map((sch) => (
              <SchoolCard key={sch.id} sch={sch} />
            ))}
          </Fragment>
        ))}
      </ul>
      <div ref={ref} className="h-[1px]" />
    </>
  );
}
