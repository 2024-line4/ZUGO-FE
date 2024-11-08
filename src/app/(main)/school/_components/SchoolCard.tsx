import { SchoolType } from "@/types/schoolType";
import Link from "next/link";

export default function SchoolCard({ sch }: { sch: SchoolType }) {
  return (
    <li className="flex min-w-[259px] cursor-pointer flex-col overflow-hidden rounded-[40px] bg-footerBg px-[4px] pt-[4px]">
      <Link href={`/school/${sch.id}`}>
        <div className="h-[68.2%] w-full rounded-t-[40px] bg-white">
          <img
            className="h-full w-full object-contain"
            src="https://i.namu.wiki/i/ke8viQ8dH00ZMC_ll0bemM_ujABpaN7GAs5WSE6VojD9JOwZ_viMt8ytqLNBy8dvJTeAHBTS4rrRR7TOPrNrDA.webp"
            alt={`${sch.schoolName}.img`}
          />
        </div>
        <div className="ml-[16px] mt-[7px] flex h-[90px] flex-col text-[23px]">
          <h2 className="text-blue1">{sch.country}</h2>
          {sch.schoolName.split("대학교").map((name, i) => (
            <span className="max-w-[80%]" key={i}>
              {i === 0 ? name + "대학교" : name}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
}
