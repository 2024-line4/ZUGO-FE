import { ReactNode } from "react";
import Nav from "./_components/(Nav)/Nav";
import Footer from "./_components/(footer)/footer";
import DefineBgImage from "./_components/(Bg)/DefineBgImage";
import RQProvider from "./_components/RQProvider";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <RQProvider>
      <DefineBgImage>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow mx-[60px]">{children}</main>
          <Footer />
        </div>
      </DefineBgImage>
    </RQProvider>
  );
}