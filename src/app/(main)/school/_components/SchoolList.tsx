type Props = {
  country?: string;
  region?: string;
};

export default function SchoolList({ country, region }: Props) {
  console.log(country, region);
  return <ul className="mt-[35px]"></ul>;
}
