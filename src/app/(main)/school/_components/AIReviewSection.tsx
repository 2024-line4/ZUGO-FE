"use client";

import Image from "next/image";
import style from "../[id]/schoolInfo.module.scss";
import MORE_BTN from "/public/more_btn.svg";
import classNames from "classnames";
import { AIReviewType } from "@/types/ReviewType";

type Props = {
  AIreviews: AIReviewType;
};

export default function AIReviewSection({ AIreviews }: Props) {
  console.log(AIreviews);
  return (
    <section className={style.AIReviewSection}>
      <div className={style.AIReviewBoxWrapper}>
        <h2 className="mb-[10px] w-fit text-[25px] font-[600]">AI 후기</h2>
        <ul className={style.reviewBox}>
          <li>
            <h2>준비사항: </h2>
            <div>{AIreviews.before_departure}</div>
          </li>
          <li>
            <h2>도착 및 수업:</h2>
            <div>{AIreviews.class}</div>
          </li>
          <li>
            <h2>학교생활:</h2>
            <div>{AIreviews.life}</div>
          </li>
          <li>
            <h2>총평:</h2>
            <div>{AIreviews.review}</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
