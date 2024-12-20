import { DormitoryInfoType } from "@/types/DormitoryType";
import { SchoolInfoType } from "@/types/schoolType";
import style from "./metaData.module.scss";
import Link from "next/link";

type Props = {
  importedFrom: "dormitory" | "school";
  data: DormitoryInfoType | SchoolInfoType;
  id: string;
};

function isDormitoryInfo(
  importedFrom: string,
  data: DormitoryInfoType | SchoolInfoType,
): data is DormitoryInfoType {
  return importedFrom === "dormitory";
}

export default function MetaData({ importedFrom, data, id }: Props) {
  return (
    <section className={style.metaDataWrapper}>
      <div className={style.thumbnail}>
        <div className={style.logoImgWrapper}>
          <img
            src={
              isDormitoryInfo(importedFrom, data)
                ? data.img_info.logo_img_Url
                : data.info.img_info
            }
            alt="logo.png"
          />
        </div>
        <div className={style.name}>
          {isDormitoryInfo(importedFrom, data) ? (
            <h2 className="w-[80%] break-words text-center text-[#222499]">
              {decodeURIComponent(id)}
            </h2>
          ) : (
            <>
              <span className="mr-[10px] text-[#222499]">미국</span>
              <span className="text-[#4E4E4E]">{decodeURIComponent(id)}</span>
            </>
          )}
        </div>
      </div>
      {
        <div className={style.info}>
          {isDormitoryInfo(importedFrom, data) ? (
            <>
              <div>
                <span className={style.infoTag}>위치: </span>
                {data.meta_data.location}
              </div>

              <div>
                <span className={style.infoTag}>홈페이지: </span>
                <Link href={`https://${data.meta_data.homepage}`}>
                  {data.meta_data.homepage}
                </Link>
              </div>

              <div>
                <span className={style.infoTag}>학생수: </span>
                {data.meta_data.dorm_students}명
              </div>
            </>
          ) : (
            <>
              <div>
                <span className={style.infoTag}>위치: </span>
                {data.info.meta_data.location}
              </div>

              <div>
                <span className={style.infoTag}>홈페이지: </span>
                <Link href={data.info.meta_data.homepage}>
                  {data.info.meta_data.homepage}
                </Link>
              </div>

              <div>
                <span className={style.infoTag}>학생수: </span>
                {data.info.meta_data.students}명
              </div>
            </>
          )}
        </div>
      }
    </section>
  );
}
