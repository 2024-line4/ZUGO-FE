import { SchoolType } from "@/types/SchoolType";

export default function defineSort(
  data: SchoolType[],
  sortBy: string,
): SchoolType[] {
  if (sortBy === "alphabet") {
    return data.sort((a, b) => a?.schoolName.localeCompare(b?.schoolName));
  } else {
    return data.sort((a, b) => b.students - a.students);
  }
}
