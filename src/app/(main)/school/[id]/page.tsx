import AIReviewSection from "../_components/AIReviewSection";
import AllReviewSection from "../_components/AllReviewSection";
import MetaData from "../../_components/metaData";
import getSchoolInfo from "../_lib/getSchoolInfo";

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
  const data = await getSchoolInfo(id);
  console.log(data);
  return (
    <>
      <MetaData importedFrom="school" data={data} id={id} />
      <AIReviewSection AIreviews={data.info.ai_review} />
      <AllReviewSection allReviews={allReviews} />
    </>
  );
}
