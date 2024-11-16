import { AllReviewType } from "@/types/ReviewType";
import style from "../[id]/schoolInfo.module.scss";

export default function AllReviewSection({
  all_review: allReviews,
}: AllReviewType) {
  return (
    <section className={style.allReviewSection}>
      <h2 className="m-[5px] mb-[10px] text-[25px] font-[600]">모든 후기</h2>
      <div className={style.reviewBoxWrapper}>
        <ul className={style.reviews}>
          {allReviews.map((review, i) => (
            <li key={i}>
              <div className={style.date}>
                {Math.floor(Math.random() * (2023 - 2018 + 1)) + 2018}년{" "}
                {Math.floor(Math.random() * 2 + 1)}학기 파견자
              </div>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
