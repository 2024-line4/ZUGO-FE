"use client";

import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchModal.module.scss";
import { useGetDormitorySearch, useGetSchoolSearch } from "@/hooks/queries";
import { SearchResultType } from "@/types/searchType";
import SearchCard from "../../dormitory/search/_components/SearchCard";
import { ClipLoader } from "react-spinners";

type Props = {
  search: string;
};

export default function SearchModal({ search }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickClose = () => {
    router.back();
  };

  const searchKeyWord: string = searchParams.get("query") || "";

  const { data, isLoading } =
    search === "school"
      ? useGetSchoolSearch(searchKeyWord)
      : useGetDormitorySearch(searchKeyWord);

  return (
    <div className={style.modalBg}>
      <div className={style.modal}>
        <button className={style.closeBtn} onClick={onClickClose}>
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </button>
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <ClipLoader />
          </div>
        ) : (
          <>
            <h2 className="mb-[10px] ml-[2px] text-[25px] font-[600]">
              총 검색결과: {data?.result.length}개
            </h2>

            {data?.result.length > 0 ? (
              <ul className={style.listWrapper}>
                {data?.result.map((e: SearchResultType) => (
                  <SearchCard key={e.id} data={e} search={search} />
                ))}
              </ul>
            ) : (
              <div className={style.noData}>검색 결과가 없습니다.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
