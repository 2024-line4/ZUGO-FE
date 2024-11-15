import { SchoolInfoType } from "@/types/schoolType";

export default async function getSchoolInfo(
  id: string,
): Promise<SchoolInfoType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/univ?school=${id}`,
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
}
