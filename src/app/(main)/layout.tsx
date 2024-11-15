import { ReactNode } from "react";
import Nav from "./_components/(Nav)/Nav";
import Footer from "./_components/(footer)/footer";
import DefineBgImage from "./_components/(Bg)/DefineBgImage";
import RQProvider from "./_components/RQProvider";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Readonly<Props>) {
  return (
    <RQProvider>
      <DefineBgImage>
        <Nav />
        <main className="mx-[60px]">{children}</main>
        {/* <Footer /> */}
      </DefineBgImage>
      {modal}
    </RQProvider>
  );
}
