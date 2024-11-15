export type AllReviewType = {
  allReviews: { totalRate: number; reviews: ReviewType[] };
};

export type ReviewType = {
  date: string;
  rate: number;
  review: string;
};

export type AIReviewType = {
  before_departure: string;
  class: string;
  life: string;
  review: string;
};
