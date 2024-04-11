/* eslint-disable @next/next/no-img-element */
import { Body3, Button3, Headline2, Title2 } from '@/components/UI';
import S from './style';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';

interface SameClothProps {
  data: {
    clothid: number;
    image: string;
    category: string;
    name: string;
  }[];
}

export default function SameCloth({ data }: SameClothProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onClickImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <S.Layout>
      <S.Label>
        <Headline2>같은 옷, 다른 느낌</Headline2>
        <Body3 className="body">
          다른 사용자들은 어떻게 활용하고 있을까요?
        </Body3>
      </S.Label>
      <S.Filter>
        {data.map((item, index) => {
          return (
            <S.FilterItem
              onTouchMove={(e) => e.stopPropagation()}
              key={index}
              state={index === currentIndex}
            >
              <Image
                onClick={() => onClickImage(index)}
                width={56}
                height={56}
                src={item.image}
                alt="같은옷"
              />
              <div className="filterItemTrue">
                <Title2>{item.category}</Title2>
                <Body3>{item.name}</Body3>
              </div>
            </S.FilterItem>
          );
        })}
      </S.Filter>
      <S.List>
        <img
          src={
            'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg'
          }
          alt=""
        />
        <div className="flexList">
          <img
            src={
              'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg'
            }
            alt=""
          />
          <img
            src={
              'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg'
            }
            alt=""
          />
          <img
            src={
              'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg'
            }
            alt=""
          />
        </div>
      </S.List>
      <Button
        size="big"
        backgroundColor="grey_100"
        color="grey_00"
        onClick={() => console.log('더보기')}
        border={true}
        className="addButton"
      >
        <Button3>더보기</Button3>
      </Button>
    </S.Layout>
  );
}
