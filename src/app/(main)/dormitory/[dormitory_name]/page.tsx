import MetaData from "../../_components/metaData";
import LocationInfo from "../_components/LocationInfo";

type Props = {
  params: Promise<{
    dormitory_name: string;
  }>;
};

const testData = {
  info: {
    meta_data: {
      location: "테스트 위치",
      dorm_students: "10000명",
      homepage: "https://www.yale.edu/",
    },
    img_info: {
      logo_img_Url:
        "https://i.namu.wiki/i/HdLwzeidQ84nWhzT6smkXCWiek2CWkbpAOZvJcy0Q7NcpvzVYlPhiEGdnIx21wgAeLkZ9yPJXuTfUfPbclg6fw.webp",
      map_img_url:
        "https://i.namu.wiki/i/HdLwzeidQ84nWhzT6smkXCWiek2CWkbpAOZvJcy0Q7NcpvzVYlPhiEGdnIx21wgAeLkZ9yPJXuTfUfPbclg6fw.webp",
    },
    review: {
      application: "신청 내용",
      room: "룸 내용",
      charge: "금액",
      location: "위치",
      review: "총평",
    },
  },
};

export default async function page({ params }: Props) {
  const { dormitory_name } = await params;
  // 이후에 이 이름 가지고 fetch해오기

  return (
    <>
      <MetaData
        importedFrom="dormitory"
        data={testData.info}
        id={dormitory_name}
      />
      <LocationInfo />
    </>
  );
}
