import style from "./nav.module.scss";
import LoginAndSignUpBtns from "./LoginAndSignUpBtns";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <LoginAndSignUpBtns />
      <NavLinks />
    </nav>
  );
}
