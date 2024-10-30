import { ReactNode } from "react";
import Nav from "./_components/(Nav)/Nav";
import Footer from "./_components/(footer)/footer";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Readonly<Props>) {
  return (
    <>
      <Nav />
      <main className="mx-[60px]">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
