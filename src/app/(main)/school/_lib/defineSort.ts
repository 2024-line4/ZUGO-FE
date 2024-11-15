import { SchoolCardType } from "@/types/schoolType";

export default function defineSort(
  data: SchoolCardType[],
  sortBy: string,
): SchoolCardType[] {
  if (sortBy === "alphabet") {
    return data.sort((a, b) => a?.name.localeCompare(b?.name));
  } else {
    return data.sort((a, b) => b.students - a.students);
  }
}
