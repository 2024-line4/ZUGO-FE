import { AllReviewType } from "@/types/ReviewType";
import style from "../[id]/schoolInfo.module.scss";
import { Fragment } from "react";

export default function AllReviewSection({ allReviews }: AllReviewType) {
  return (
    <section className={style.allReviewSection}>
      <h2 className="m-[5px] mb-[10px] text-[25px] font-[600]">모든 후기</h2>
      <div className={style.reviewBoxWrapper}>
        <div className={style.totalRate}>
          {`총 평점: ${allReviews.totalRate.toFixed(1)} `}
          {Array.from({ length: Math.floor(allReviews.totalRate) }).map(
            (_, i) => (
              <Fragment key={i}>⭐</Fragment>
            ),
          )}
        </div>
        <ul className={style.reviews}>
          {allReviews.reviews.map((review, i) => (
            <li key={i}>
              <div className={style.date}>{review.date} 파견자</div>
              <div className={style.reviewRate}>
                {Array.from({ length: review.rate }).map((_, i) => (
                  <Fragment key={i}>⭐</Fragment>
                ))}
              </div>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
