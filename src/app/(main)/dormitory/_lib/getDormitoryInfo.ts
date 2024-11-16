import { DormitoryInfoType } from "@/types/DormitoryType";

type GetDormitoryInfoResponseType = {
  info: DormitoryInfoType;
};

export default async function getDormitoryInfo(
  name: string,
): Promise<GetDormitoryInfoResponseType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/dorm?dorm=${name}`,
  );

  if (!response.ok) {
    throw new Error("HTTP ERROR");
  }

  return response.json();
}
