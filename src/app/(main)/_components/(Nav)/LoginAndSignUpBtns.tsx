import style from "./nav.module.scss";
import loginIcon from "@/../public/login-icon.png";
import signUpIcon from "@/../public/sign-up-icon.png";
import verticalLine from "@/../public/vertical-line.png";
import Image from "next/image";

export default function LoginAndSignUpBtns() {
  return (
    <div className={style.loginSingUpBtns}>
      <div className={style.btnsWrapper}>
        <button className={style.loginBtn}>
          <Image
            width={18}
            height={18.44}
            src={loginIcon}
            alt="loginIcon.png"
          />
          <span>로그인</span>
        </button>
        <span className={style.verticalLine}>
          <Image src={verticalLine} alt="line.png" />
        </span>
        <button className={style.signUpBtn}>
          <Image src={signUpIcon} alt="signUpIcon.png" />
          회원가입
        </button>
      </div>
    </div>
  );
}
