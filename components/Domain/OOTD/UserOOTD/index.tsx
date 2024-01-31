/* eslint-disable @next/next/no-img-element */
import { Title1 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';

interface UserOOTDProps {
  data: {
    ootdId: number;
    ootdImage: string;
  }[];
}

export default function UserOOTD({ data }: UserOOTDProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <S.Title>
        <Title1>낙낙님의 다른 OOTD</Title1>
      </S.Title>
      <S.OOTD>
        <ImageList type="row" data={data} />
      </S.OOTD>
    </S.Layout>
  );
}
