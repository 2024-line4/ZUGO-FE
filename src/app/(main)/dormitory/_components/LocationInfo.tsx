import Map from "./Map";
import style from "../[dormitory_name]/dormitoryName.module.scss";
import GoogleMap from "./Map";

export default function LocationInfo() {
  return (
    <section className={style.wrapper}>
      <GoogleMap address="서울시청" />
      <div className={style.locationInfo}>dd</div>
    </section>
  );
}
