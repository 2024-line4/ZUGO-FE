import { Metadata } from "next";
import MetaData from "../../_components/metaData";
import LocationInfo from "../_components/LocationInfo";
import getDormitoryInfo from "../_lib/getDormitoryInfo";
import DormitoryReview from "../_components/DormitoryReview";

type Props = {
  params: Promise<{
    dormitory_name: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: (await params).dormitory_name,
  };
}

export default async function page({ params }: Props) {
  const { dormitory_name } = await params;
  const { info } = await getDormitoryInfo(dormitory_name);
  console.log(info);

  return (
    <>
      <MetaData importedFrom="dormitory" data={info} id={dormitory_name} />
      <LocationInfo id={dormitory_name} />
      <DormitoryReview review={info.review} />
    </>
  );
}
