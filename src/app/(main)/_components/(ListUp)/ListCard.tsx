import { DormitoryCardType } from "@/types/DormitoryType";
import { SchoolCardType } from "@/types/schoolType";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DefineType(
  data: DormitoryCardType | SchoolCardType,
  type: string,
): data is SchoolCardType {
  return type === "school";
}

type Props = {
  data: DormitoryCardType | SchoolCardType;
};

export default function ListCard({ data }: Props) {
  const currentUrl = usePathname();
  return (
    <li className="flex h-fit min-w-[259px] cursor-pointer flex-col overflow-hidden rounded-[40px] bg-footerBg px-[4px] pt-[4px]">
      {currentUrl === "/school" && DefineType(data, "school") ? (
        <Link href={`/school/${data.id}`}>
          <div className="h-[68.2%] w-full overflow-hidden rounded-t-[40px] bg-white">
            <img
              className="h-full max-h-[300px] w-full object-contain"
              src={data.img}
              alt={`${data.name}.img`}
            />
          </div>
          <div className="mb-[15px] ml-[16px] flex h-[90px] flex-col justify-center text-[23px]">
            <h2 className="text-blue1">{data.country}</h2>
            <span>{data.name}</span>
          </div>
        </Link>
      ) : (
        <Link href={`/dormitory/${data.id}`}>
          <div className="h-[68.2%] w-full overflow-hidden rounded-t-[40px] bg-white">
            <img
              className="h-full max-h-[300px] w-full object-contain"
              src={data.img}
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
