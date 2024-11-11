//학교 리스트업 부분의 학교 카드의 타입
export type SchoolCardType = {
  id: string;
  name: string;
  country: string;
  region: string;
  students: number;
  img: string;
};

//학교 상세 정보 페이지의 학교 타입
export type SchoolInfoType = {
  location: string;
  homepageUrl: string;
  tel: string;
  students: number;
  dormitory: number;
};
