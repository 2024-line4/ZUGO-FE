"use client";

import Image from "next/image";
import style from "./searchAndFilter.module.scss";
import searchIcon from "@/../public/search-icon.svg";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, countryCodes, regionCode } from "@/lib/mappingCode";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchAndFilter() {
  const searchParams = useSearchParams();
  const currentUrl = usePathname();

  // 쿼리 스트링 중 country를 설정하는 state 값
  const [countryParam, setCountryParam] = useState<string>(
    searchParams.get("country") || "",
  );

  // 쿼리 스트링 중 region을 설정하는 state 값
  const [regionParam, setRegionParam] = useState<string>(
    searchParams.get("region") || "",
  );
  const router = useRouter();

  // filter를 설정하는 함수: 위 useState 값을 설정한다
  const handleFilter = (option: string, value?: string) => {
    switch (option) {
      //전체 버튼을 클릭했을 경우
      case "All":
        setCountryParam("");
        setRegionParam("");
        router.push(currentUrl === "/school" ? "/school" : "/dormitory");
        break;
      //country를 설정했을 경우
      case "country":
        setRegionParam("");
        setCountryParam(value!);
        break;
      //region을 설정했을 경우
      case "region":
        setRegionParam(value!);
        break;
    }
  };

  //설정된 state 값으로 쿼리 스트링을 설정한다
  const handleParams = () => {
    let newParam = {};
    if (countryParam) {
      newParam = {
        country: countryParam,
      };
    }

    if (regionParam) {
      newParam = {
        ...newParam,
        region: regionParam,
      };
    }

    const newUrl = new URLSearchParams(newParam);

    //현재 url과 새로운 url이 차이가 없을 시에만 필터 적용(같은 필터의 데이터 fetch 방지)
    if (
      newUrl.get("country") !== searchParams.get("country") ||
      newUrl.get("region") !== searchParams.get("region")
    ) {
      router.push(`?${newUrl.toString()}`);
    }
  };

  return (
    <section className={style.searchAndFilter}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="자세한 내용을 입력하세요."
          className={style.input}
        />
        <Image src={searchIcon} alt="search.svg" />
      </div>
      <ul className={style.filter}>
        <li>
          <Button
            onClick={() => handleFilter("All")}
            className="h-full px-[35px] py-[6px] text-[23px]"
          >
            전체
          </Button>
        </li>
        <li>
          <Select
            value={countryParam}
            onValueChange={(value) => handleFilter("country", value)}
          >
            <SelectTrigger className="flex h-full min-w-[109px] items-center text-[23px]">
              <SelectValue placeholder="국가" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel className="text-[20px]">국가</SelectLabel>
                {Object.entries(countryCodes)
                  .sort((a, b) => a[0].localeCompare(b[0]))
                  .map((country) => (
                    <SelectItem
                      key={country[1]}
                      className="cursor-pointer text-[20px] hover:bg-slate-100"
                      value={country[1]}
                    >
                      {country[0]}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </li>
        <li>
          <Select
            value={regionParam}
            onValueChange={(value) => handleFilter("region", value)}
          >
            <SelectTrigger className="flex h-full min-w-[109px] items-center text-[23px]">
              <SelectValue placeholder="지역" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel className="text-[20px]">지역</SelectLabel>
                {countryParam
                  ? countries[countryParam]
                      .sort((a, b) => a.localeCompare(b))
                      .map((region) => (
                        <SelectItem
                          className="cursor-pointer text-[20px] hover:bg-slate-100"
                          key={regionCode[region]}
                          value={regionCode[region] || ""}
                        >
                          {region}
                        </SelectItem>
                      ))
                  : Object.entries(regionCode).map((region) => (
                      <SelectItem
                        className="cursor-pointer text-[20px] hover:bg-slate-100"
                        key={region[1]}
                        value={region[1] || ""}
                      >
                        {region[0]}
                      </SelectItem>
                    ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </li>
        <li>
          <Button onClick={handleParams} className="relative h-full w-[50px]">
            <Image src={searchIcon} alt="search.svg" />
          </Button>
        </li>
      </ul>
    </section>
  );
}
