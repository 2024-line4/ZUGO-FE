import { ReactNode } from "react";
import Nav from "./_components/(Nav)/Nav";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Readonly<Props>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
