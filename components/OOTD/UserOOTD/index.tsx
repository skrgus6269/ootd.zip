/* eslint-disable @next/next/no-img-element */
import { Headline3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';

interface UserOOTDProps {
  data: {
    imageId: number;
    image: string;
  }[];
}

export default function UserOOTD({ data }: UserOOTDProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <S.Title>
        <Headline3>낙낙님의 다른 OOTD</Headline3>
      </S.Title>
      <S.OOTD>
        <ImageList type="row" data={data} />
      </S.OOTD>
    </S.Layout>
  );
}
