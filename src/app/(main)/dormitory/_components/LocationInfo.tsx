"use client";

import Map from "./Map";
import style from "../[dormitory_name]/dormitoryName.module.scss";
import { Fragment, useState } from "react";

type Props = {
  id: string;
};

export default function LocationInfo({ id }: Props) {
  const [formmetedLocation, setFormattedLocation] = useState<string>("");
  const [nearby, setNearby] = useState({
    school: [],
    near: [],
  });

  console.log(nearby.school);

  return (
    <section className={style.wrapper}>
      {/* 밑에 id로 넣기 */}
      <Map
        address={"서울대학교"}
        //@ts-ignore
        setNearby={setNearby}
        setFormmetedLocation={setFormattedLocation}
      />
      <div className={style.locationInfo}>
        <div className={style.mapInfo}>
          <h2>위치정보</h2>
          <span>{formmetedLocation}</span>
        </div>

        <div className={style.mapInfo}>
          <h2>근처대학교</h2>
          <span>
            {/* {nearby?.school?.places?.map((e, i) => <Fragment key={i}>{e}</Fragment>)} */}
          </span>
        </div>

        <div className={style.mapInfo}>
          <h2>근처시설</h2>
          <span>마트, 관광지, 도서관.....</span>
        </div>
      </div>
    </section>
  );
}
