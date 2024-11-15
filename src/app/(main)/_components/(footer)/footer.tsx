import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerLinks}>
          <span>개인정보처리방침</span>
          <span> · </span>
          <span>이용약관</span>
        </div>
        <p className={style.contactInfo}>
          ZUGO@gmail.com | 010-0000-0000 | @ZUGO_instagram
        </p>
      </div>
    </footer>
  );
}
