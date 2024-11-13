import React from "react";
import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex min-h-[350px] w-full items-center justify-center">
      <FadeLoader />
    </div>
  );
}
