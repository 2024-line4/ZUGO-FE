"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectSort({ totalData = 0 }: { totalData: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSelectSortBy = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sortBy", value);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="mb-[27px] mt-[18px] flex items-center text-[20px]">
      <span className="mr-[12px]">총 {totalData}개 검색결과</span>
      {pathname === "/school" && (
        <Select
          value={searchParams.get("sortBy") || "students"}
          onValueChange={(value) => handleSelectSortBy(value)}
        >
          <SelectTrigger className="w-fit px-2 text-[20px]">
            <SelectValue placeholder="학생 순" />
          </SelectTrigger>
          <SelectContent className="w-fit bg-white">
            <SelectGroup>
              <SelectItem
                className="text-[20px] hover:bg-slate-100"
                value="students"
              >
                학생 순
              </SelectItem>
              <SelectItem
                className="text-[20px] hover:bg-slate-100"
                value="alphabet"
              >
                알파벳 순
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
