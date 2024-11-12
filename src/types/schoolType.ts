//학교 리스트업 부분의 학교 카드의 타입
export type SchoolCardType = {
  id: string;
  name: string;
  country: string;
  region: string;
  students: number;
  img: string;
};

export type SchoolInfoType = {
  info: {
    meta_data: {
      location: string;
      students: number;
      homepage: string;
      number: string;
      dormitory: number;
    };
    img_info: string;
    ai_review: {
      before_departure: string;
      class: string;
      life: string;
      review: string;
    };
    all_review: {
      before_departure: string;
      class: string;
      life: string;
      review: string;
    }[];
  };
};
