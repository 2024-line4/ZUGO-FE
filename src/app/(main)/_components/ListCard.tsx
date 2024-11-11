import { DormitoryCardType } from "@/types/DormitoryType";
import { SchoolCardType } from "@/types/SchoolType";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DefineType<T> = T extends "school"
  ? SchoolCardType & { type: "school" }
  : DormitoryCardType & { type: "dormitory" };

export default function ListCard<T>({ data }: { data: DefineType<T> }) {
  const currentUrl = usePathname();

  return (
    <li className="flex h-fit min-w-[259px] cursor-pointer flex-col overflow-hidden rounded-[40px] bg-footerBg px-[4px] pt-[4px]">
      {currentUrl === "/school" && data.type === "school" && (
        <Link href={`/school/${data.id}`}>
          <div className="h-[68.2%] w-full rounded-t-[40px] bg-white">
            <img
              className="h-full w-full object-contain"
              src="https://i.namu.wiki/i/ke8viQ8dH00ZMC_ll0bemM_ujABpaN7GAs5WSE6VojD9JOwZ_viMt8ytqLNBy8dvJTeAHBTS4rrRR7TOPrNrDA.webp"
              alt={`${data.name}.img`}
            />
          </div>
          <div className="mb-[15px] ml-[16px] flex h-[90px] flex-col justify-center text-[23px]">
            <h2 className="text-blue1">{data.country}</h2>
            <span>{data.name}</span>
          </div>
        </Link>
      )}
      {currentUrl === "/dormitory" && data.type === "dormitory" && (
        <Link href={`/dormitory/${data.id}`}>
          <div className="h-[68.2%] w-full rounded-t-[40px] bg-white">
            <img
              className="h-full w-full object-contain"
              src="https://i.namu.wiki/i/ke8viQ8dH00ZMC_ll0bemM_ujABpaN7GAs5WSE6VojD9JOwZ_viMt8ytqLNBy8dvJTeAHBTS4rrRR7TOPrNrDA.webp"
              alt={`${data.name}.img`}
            />
          </div>
          <div className="mx-auto my-[5px] flex h-[90px] max-w-[70%] items-center justify-center text-center text-[23px]">
            {data.name}
          </div>
        </Link>
      )}
    </li>
  );
}
