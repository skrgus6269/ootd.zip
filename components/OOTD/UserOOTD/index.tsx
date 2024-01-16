/* eslint-disable @next/next/no-img-element */
import { Headline3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';

interface UserOOTDProps {
  data: {
    userName: string;
    ootd: {
      ootdId: number;
      image: string;
    }[];
  };
}

export default function UserOOTD({ data }: UserOOTDProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <S.Title>
        <Headline3>{data.userName}님의 다른 OOTD</Headline3>
      </S.Title>
      <S.OOTD>
        {data.ootd.map((item) => {
          return (
            <img
              onClick={() => router.push(`/OOTD/${item.ootdId}`)}
              src={item.image}
              alt="유저의 ootd"
              key={item.ootdId}
            />
          );
        })}
      </S.OOTD>
    </S.Layout>
  );
}
