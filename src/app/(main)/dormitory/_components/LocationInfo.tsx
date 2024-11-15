import Map from "./Map";
import style from "../[dormitory_name]/dormitoryName.module.scss";

type Props = {
  id: string;
};

export default function LocationInfo({ id }: Props) {
  return (
    <section className={style.wrapper}>
      {/* 밑에 id로 넣기 */}
      <Map address={"서울대학교"} />
      <div className={style.locationInfo}>
        <div className={style.mapInfo}>
          <h2>위치정보</h2>
          <span>미국 00대학교 00 ** 99-22</span>
        </div>

        <div className={style.mapInfo}>
          <h2>근처대학교</h2>
          <span>00대학교, **대학교</span>
        </div>

        <div className={style.mapInfo}>
          <h2>근처시설</h2>
          <span>마트, 관광지, 도서관.....</span>
        </div>
      </div>
    </section>
  );
}
