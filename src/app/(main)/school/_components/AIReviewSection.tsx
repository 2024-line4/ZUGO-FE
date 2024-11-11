"use client";

import Image from "next/image";
import style from "../[id]/schoolInfo.module.scss";
import MORE_BTN from "/public/more_btn.svg";
import { useState } from "react";
import classNames from "classnames";

type Props = {
  reviews: string[];
};

export default function AIReviewSection({ reviews }: Props) {
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const handleVisibleCount = () => {
    if (visibleCount >= reviews.length) {
      setVisibleCount(3);
      return;
    }

    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className={style.AIReviewSection}>
      <div className={style.AIReviewBoxWrapper}>
        <h2 className="mb-[10px] w-fit text-[25px] font-[600]">AI 후기</h2>
        <ul className={style.reviewBox}>
          {reviews.slice(0, visibleCount).map((e, i) => (
            <li key={i}>{e}</li>
          ))}
          {reviews.length >= 3 && (
            <button
              onClick={handleVisibleCount}
              className={classNames(style.moreBtn, {
                [style.fold]: visibleCount >= reviews.length,
              })}
            >
              <Image src={MORE_BTN.src} alt="more" fill />
            </button>
          )}
        </ul>
      </div>
    </section>
  );
}
