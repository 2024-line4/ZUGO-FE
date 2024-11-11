export type AllReviewType = {
  allReviews: { totalRate: number; reviews: ReviewType[] };
};

export type ReviewType = {
  date: string;
  rate: number;
  review: string;
};
