import { DormitoryCardType } from "@/types/DormitoryType";
import { SchoolCardType } from "@/types/SchoolType";
import { useInfiniteQuery } from "@tanstack/react-query";

type GetDataProps = {
  country: string;
  region: string;
};

// 학교 정보 받아오는 쿼리문

type GetSchoolResponseType = Promise<{
  schools: SchoolCardType[];
  totalData: number;
}>;

export function useGetSchool({ country, region }: GetDataProps) {
  return useInfiniteQuery({
    queryKey: ["schools", country, region],
    queryFn: async ({
      pageParam,
    }: {
      pageParam: number;
    }): GetSchoolResponseType => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/univ/list?country=${country}&region=${region}&page=${pageParam}`,
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
      if (lastPage.schools.length !== 12) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
}

type GetDormitoryResponseType = Promise<{
  dormitory: DormitoryCardType[];
  totalData: number;
}>;

//기숙사 정보 받아오는 쿼리문
export function useGetDormitory({ country, region }: GetDataProps) {
  return useInfiniteQuery({
    queryKey: ["dormitory", country, region],
    queryFn: async ({
      pageParam,
    }: {
      pageParam: number;
    }): GetDormitoryResponseType => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dorm/list?country=${country}&region=${region}&page=${pageParam}`,
      );

      if (!response.ok) {
        throw new Error("GET Dormitory HTTP ERROR");
      }

      return response.json();
    },
    gcTime: 300 * 1600,
    staleTime: 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.dormitory.length !== 12) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
}
