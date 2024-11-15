import { SearchResultType } from "@/types/searchType";
import style from "./searchCard.module.scss";
import Link from "next/link";

type Props = {
  data: SearchResultType;
  search: string;
};

export default function SearchCard({ data, search }: Props) {
  return (
    <li className={style.cardWrapper}>
      <Link
        className="h-full w-full"
        href={
          search === "school" ? `/school/${data.id}` : `/dormitory/${data.id}`
        }
      >
        <div className={style.logoWrapper}>
          <img src={data.img_url} alt={`${data.id}.img`} />
        </div>
        <h2>{data.id}</h2>
      </Link>
    </li>
  );
}
