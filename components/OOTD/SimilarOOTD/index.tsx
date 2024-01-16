/* eslint-disable @next/next/no-img-element */
import { Headline3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';

interface SimilarOOTDProps {
  data: {
    ootdId: number;
    image: string;
    userName: string;
  }[];
}

export default function SimilarOOTD({ data }: SimilarOOTDProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <S.Title>
        <Headline3>비슷한 OOTD</Headline3>
      </S.Title>
      <S.OOTD>
        {data.map((item) => {
          return (
            <img
              onClick={() =>
                router.push(`/${item.userName}/OOTD/${item.ootdId}`)
              }
              key={item.ootdId}
              src={item.image}
              alt="비슷한 ootd"
            />
          );
        })}
      </S.OOTD>
    </S.Layout>
  );
}
