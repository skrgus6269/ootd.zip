import { Headline2 } from '@/components/UI';
import S from './style';
import { MainFavoriteCard } from '@/components/Card';
import Carousel from '@/components/Carousel';
import { useState } from 'react';
import { MainFavoriteCardProps } from '@/components/Card/MainFavoriteCard';
import { useRouter } from 'next/router';

export default function LikeOOTD() {
  const [data, setData] = useState<MainFavoriteCardProps[] | null>([
    {
      userId: 1,
      userName: 'nak',
      ootdImage:
        'https://ootdzip.s3.ap-northeast-2.amazonaws.com/529928a6-68f6-4fb6-b54d-dd59bfba6b62_2024-02-21.jpg',
      ootdId: 5,
    },
    {
      userId: 1,
      userName: 'nak',
      ootdImage:
        'https://ootdzip.s3.ap-northeast-2.amazonaws.com/529928a6-68f6-4fb6-b54d-dd59bfba6b62_2024-02-21.jpg',
      ootdId: 5,
    },
  ]);
  const router = useRouter();

  const onClickCard = (ootdId: number) => {
    router.push(`/OOTD/${ootdId}`);
  };
  return (
    <S.Layout onTouchMove={(e) => e.stopPropagation()}>
      <Headline2>내가 '찜'한 OOTD</Headline2>
      <Carousel infinite={false} slidesToShow={1.45}>
        {data?.map((item, index) => {
          return (
            <MainFavoriteCard
              key={index}
              userId={item.userId}
              userName={item.userName}
              ootdImage={item.ootdImage}
              ootdId={item.ootdId}
              onClick={() => onClickCard(item.ootdId)}
            />
          );
        })}
      </Carousel>
    </S.Layout>
  );
}
