export type DormitoryCardType = {
  id: string;
  name: string;
  img: string;
  country: string;
  region: string;
};

export type DormitoryInfoType = {
  meta_data: {
    location: string;
    dorm_students: string;
    homepage: string;
  };

  img_info: {
    logo_img_Url: string;
    map_img_url: string;
  };

  review: {
    application: string;
    room: string;
    charge: string;
    location: string;
    review: string;
  };
};
