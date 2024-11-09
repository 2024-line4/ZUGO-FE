import { Metadata } from "next";

// 이 부분은 로그인/회원가입이 생긴다면 동적 경로 바인딩 함수 async generateMetadata 바꿔야 합니다
export const metadata: Metadata = {
  title: "My Page",
  description: "교환학생 플랫폼 ZUGO My Page",
};

export default function MyPage() {
  // 내정보 탭
  return <div>My Page</div>;
}
