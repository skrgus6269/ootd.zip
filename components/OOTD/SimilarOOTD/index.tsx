/* eslint-disable @next/next/no-img-element */
import { Headline3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';

interface SimilarOOTDProps {
  data: {
    imageId: number;
    image: string;
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
        <Headline3>비슷한 OOTD</Headline3>
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
