import style from "@/app/(main)/dormitory/[dormitory_name]/dormitoryName.module.scss";

type Props = {
  review: {
    application: string;
    charge: string;
    location: string;
    review: string;
    room: string;
  };
};

export default function DormitoryReview({ review }: Props) {
  return (
    <section className={style.reviewSection}>
      <h2>후기</h2>
      <div className={style.reviewBox}>
        <div className={style.reviewCategory}>
          <h3>신청내용: </h3>
          <p>{review.application}</p>
        </div>

        <div className={style.reviewCategory}>
          <h3>금액: </h3>
          <p>{review.charge}</p>
        </div>

        <div className={style.reviewCategory}>
          <h3>위치: </h3>
          <p>{review.location}</p>
        </div>

        <div className={style.reviewCategory}>
          <h3>기숙사 시설: </h3>
          <p>{review.room}</p>
        </div>

        <div className={style.reviewCategory}>
          <h3>총평: </h3>
          <p>{review.review}</p>
        </div>
      </div>
    </section>
  );
}
