type Props = {
  params: Promise<{
    dormitory_name: string;
  }>;
};

export default async function page({ params }: Props) {
  const { dormitory_name } = await params;
  // 이후에 이 이름 가지고 fetch해오기

  return (
    <>
      <section></section>
    </>
  );
}
