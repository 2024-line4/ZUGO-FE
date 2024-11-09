import { SchoolType } from "@/types/schoolType";
import { useInfiniteQuery } from "@tanstack/react-query";

type GetSchoolProps = {
  country: string | null;
  region: string | null;
};

// api의 response 타입에 따라 수정
// 밑의 SchoolType도 마찬가지
type GetSchoolResponseType = Promise<{
  message: string;
  school: SchoolType[];
  totalData: number;
}>;

export function useGetSchool({ country, region }: GetSchoolProps) {
  console.log(country, region);
  return useInfiniteQuery({
    queryKey: ["school", country, region],
    queryFn: async ({
      pageParam,
    }: {
      pageParam: number;
    }): GetSchoolResponseType => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/getSchool?country=${country}&region=${region}&page=${pageParam}`,
      );

      if (!response.ok) {
        throw new Error("GET SCHOOL ERROR");
      }

      return response.json();
    },
    gcTime: 300 * 1000,
    staleTime: 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.school.length !== 12) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
}
