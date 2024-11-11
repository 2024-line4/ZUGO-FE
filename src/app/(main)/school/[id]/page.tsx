import style from "./schoolInfo.module.scss";
import Link from "next/link";
import AIReviewSection from "../_components/AIReviewSection";
import AllReviewSection from "../_components/AllReviewSection";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: id,
    description: `${id}학교의 정보 및 교환학생 리뷰`,
  };
}

const text = [
  "예일대의 고풍스러운 건물과 뉴헤이븐의 독특한 분위기 덕분에 교환학생들에게 색다른 학습 환경을 제공합니다. 도서관이 특히 유명하며, 학생들이 공부에 몰입할 수 있는 분위기를 조성합니다.",
  "네트워킹: 예일대는 다양한 국제 학생들과의 교류가 가능하며, 이를 통해 글로벌 네트워크를 쌓을 수 있습니다. 교환학생으로서 다양한 백그라운드의 친구들을 사귈 수 있다는 점에서 큰 장점이 됩니다.",
  "학업 강도가 높기 때문에 교환학생에게도 많은 과제가 주어질 수 있습니다. 영어로 진행되는 수업과 많은 독서량이 요구되어 적응에 어려움을 느낄 수 있습니다.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis dicta laborum, modi voluptate iusto exercitationem iste, optio rerum atque, nemo ab provident possimus neque ipsa suscipit deserunt quaerat recusandae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis dicta laborum, modi voluptate iusto exercitationem iste, optio rerum atque, nemo ab provident possimus neque ipsa suscipit deserunt quaerat recusandae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis dicta laborum, modi voluptate iusto exercitationem iste, optio rerum atque, nemo ab provident possimus neque ipsa suscipit deserunt quaerat recusandae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis dicta laborum, modi voluptate iusto exercitationem iste, optio rerum atque, nemo ab provident possimus neque ipsa suscipit deserunt quaerat recusandae?",
];

const allReviews = {
  totalRate: 3,
  reviews: [
    {
      date: "2023년 1학기",
      rate: 5,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 2,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 1,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 1,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 1,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 1,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
    {
      date: "2023년 1학기",
      rate: 1,
      review:
        "소규모 클래스 형태로 진행되며, 토론과 발표가 중심이 되어 적극적으로 의견을 나누며 배울 수 있었습니다.",
    },
  ],
};

export default async function SchoolInfo({ params }: Props) {
  const { id } = await params;
  // 이후에 이 id를 가지고 fetch 해야함
  return (
    <>
      <section className={style.schoolInfoSection}>
        <div className={style.schoolThumbnail}>
          <div className={style.schoolLogo}>
            <img
              src="https://i.namu.wiki/i/HdLwzeidQ84nWhzT6smkXCWiek2CWkbpAOZvJcy0Q7NcpvzVYlPhiEGdnIx21wgAeLkZ9yPJXuTfUfPbclg6fw.webp"
              alt={`${id}-logo.png`}
            />
          </div>
          <div className={style.schoolName}>
            <span className="mr-[10px] text-[#222499]">미국</span>
            <span className="text-[#4E4E4E]">{id}</span>
          </div>
        </div>

        <div className={style.schoolInfo}>
          <div>
            <span className={style.infoTag}>위치: </span>
            미국 코네티컷주 뉴헤이븐
          </div>

          <div>
            <span className={style.infoTag}>홈페이지: </span>
            <Link href={"https://www.yale.edu/"}>https://www.yale.edu/</Link>
          </div>

          <div>
            <span className={style.infoTag}>전화: </span>
            +1 203-432-4771
          </div>

          <div>
            <span className={style.infoTag}>학생수: </span>
            11,904명 (2023년 기준) (학부 6,590명, 대학원 5,314명)
          </div>

          <div>
            <span className={style.infoTag}>기숙사: </span>총 14개
          </div>
        </div>
      </section>
      <AIReviewSection reviews={text} />
      <AllReviewSection allReviews={allReviews} />
    </>
  );
}
