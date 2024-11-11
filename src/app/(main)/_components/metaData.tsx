type Props = {
  importedFrom: string;
  // 이 밑의 data는 나중에 바꿔야함
  data?: string;
};

export default function MetaData({ importedFrom, data }: Props) {
  return <div>metaData</div>;
}
