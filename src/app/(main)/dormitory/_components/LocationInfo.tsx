import Map from "./Map";
import style from "../[dormitory_name]/dormitoryName.module.scss";

export default function LocationInfo() {
  return (
    <section className="wrapper">
      <Map address="서울시 중랑구 면목동 15길48" />
    </section>
  );
}
