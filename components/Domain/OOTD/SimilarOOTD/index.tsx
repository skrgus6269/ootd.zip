/* eslint-disable @next/next/no-img-element */
import { Title1 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';

interface SimilarOOTDProps {
  data: {
    ootdId: number;
    ootdImage: string;
  }[];
}

export default function SimilarOOTD({ data }: SimilarOOTDProps) {
  const router = useRouter();

  const onClickSimilarOOTDImage = (index: number) => {
    router.push(`/OOTD/${index}`);
  };
  return (
    <S.Layout>
      <S.Title>
        <Title1>비슷한 OOTD</Title1>
      </S.Title>
      <S.OOTD>
        <ImageList
          data={data}
          onClick={onClickSimilarOOTDImage}
          type="column"
        />
      </S.OOTD>
    </S.Layout>
  );
}
