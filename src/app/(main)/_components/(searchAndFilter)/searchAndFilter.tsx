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
import { countryCodes } from "@/lib/mappingCode";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchAndFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState({});

  const handleQueryString = (option: string, value?: string) => {
    let newQuery = {};
    if (option !== "All") {
      newQuery =
        option === "country"
          ? {
              [option]: value,
            }
          : {
              ...query,
              [option]: value,
            };
    }

    setQuery(newQuery);

    const params = new URLSearchParams(newQuery).toString();

    router.push(`?${params}`);
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
            onClick={() => handleQueryString("All")}
            className="h-full px-[35px] py-[6px] text-[23px]"
          >
            전체
          </Button>
        </li>
        <li>
          <Select
            value={params.get("country") || ""}
            onValueChange={(value: string) =>
              handleQueryString("country", value)
            }
          >
            <SelectTrigger className="flex h-full min-w-[109px] items-center text-[23px]">
              <SelectValue placeholder="국가" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-[20px]">국가</SelectLabel>
                {Object.entries(countryCodes)
                  .sort((a, b) => a[0].localeCompare(b[0]))
                  .map((country) => (
                    <SelectItem
                      key={country[1]}
                      className="text-[20px]"
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
            value={params.get("region") || ""}
            onValueChange={(value: string) =>
              handleQueryString("region", value)
            }
          >
            <SelectTrigger className="flex h-full min-w-[109px] items-center text-[23px]">
              <SelectValue placeholder="지역" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-[20px]">지역</SelectLabel>
                <SelectItem className="text-[20px]" value="apple">
                  Apple
                </SelectItem>
                <SelectItem className="text-[20px]" value="banana">
                  Banana
                </SelectItem>
                <SelectItem className="text-[20px]" value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem className="text-[20px]" value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem className="text-[20px]" value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </li>
        <li>
          <Button className="relative h-full w-[50px]">
            <Image src={searchIcon} alt="search.svg" />
          </Button>
        </li>
      </ul>
    </section>
  );
}
