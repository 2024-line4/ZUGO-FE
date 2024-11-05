"use client";

import { ReactNode } from "react";
import NotMainBgCircleInner from "@/../public/not-main-bg-circle-inner.png";
import NotMainBgCircleOuter from "@/../public/not-main-bg-circle-outer.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import mainBg from "@/../public/mainBg.png";

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
            className="absolute left-0 top-0 z-[-998]"
            src={NotMainBgCircleInner}
            alt="inner-circle"
            priority
          />
          <Image
            className="absolute left-0 top-0 z-[-999]"
            src={NotMainBgCircleOuter}
            alt="outer-circle"
            priority
          />
        </>
      )}
      {url === "/" && (
        <Image
          alt="mainBg"
          src={mainBg}
          className="absolute left-0 top-0 z-[-999] h-[561px] w-screen"
          priority
        />
      )}
      {children}
    </>
  );
}
