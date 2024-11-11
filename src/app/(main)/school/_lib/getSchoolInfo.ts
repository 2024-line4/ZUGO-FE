export default async function getSchoolInfo({
  schoolName,
}: {
  schoolName: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/UNIV=${schoolName}`,
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
}
