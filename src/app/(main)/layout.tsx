import { ReactNode } from "react";
import Nav from "./_components/(Nav)/Nav";
import Footer from "./_components/(footer)/footer";
import DefineBgImage from "./_components/(Bg)/DefineBgImage";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <DefineBgImage>
      <Nav />
      <main className="mx-[60px]">{children}</main>
      {/* <Footer /> */}
    </DefineBgImage>
  );
}
