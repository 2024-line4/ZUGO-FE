"use client";

import { ReactNode } from "react";
import NotMainBgCircleInner from "@/../public/not-main-bg-circle-inner.png";
import NotMainBgCircleOuter from "@/../public/not-main-bg-circle-outer.png";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export default function DefineBgImage({ children }: Readonly<Props>) {
  const url = usePathname();

  return (
    <>
      {url !== "/" && (
        <>
          <Image
            className="absolute top-0 left-0 z-[-998] "
            src={NotMainBgCircleInner}
            alt="inner-circle"
          />
          <Image
            className="absolute top-0 left-0  z-[-999]"
            src={NotMainBgCircleOuter}
            alt="outer-circle"
          />
        </>
      )}
      {children}
    </>
  );
}
