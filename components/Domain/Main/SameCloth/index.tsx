import { Body3, Button3, Headline2, Title2 } from '@/components/UI';
import S from './style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { MainApi } from '@/apis/domain/Main/MainApi';
import NextImage from '@/components/NextImage';
import { useRouter } from 'next/router';

type SameClothData = {
  clothes: {
    id: number;
    name: string;
    categoryType: string;
    imageUrl: string;
  };
  ootdImages: {
    ootdId: number;
    imageUrl: string;
  }[];
}[];

export default function SameCloth() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sameClothData, setSameClothData] = useState<SameClothData | null>(
    null
  );

  const { getSameClothDifferentOOTD } = MainApi();

  const fetchDataFunction = async () => {
    const { content } = await getSameClothDifferentOOTD();

    setSameClothData(content);
  };

  const onClickImage = (index: number) => {
    setCurrentIndex(index);
  };

  const router = useRouter();

  const onClickListImage = (ootdId: number) => {
    router.push(`/ootd/${ootdId}/curation`);
  };

  useEffect(() => {
    fetchDataFunction();
  }, []);

  return (
    <S.Layout>
      <S.Label>
        <Headline2>같은 옷, 다른 느낌</Headline2>
        <Body3 className="body">
          다른 사용자들은 어떻게 활용하고 있을까요?
        </Body3>
      </S.Label>
      <S.Filter>
        {sameClothData &&
          sameClothData.map((item, index) => {
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
                  src={item.clothes.imageUrl}
                  alt="같은옷"
                />
                <div className="filterItemTrue">
                  <Title2>{item.clothes.categoryType}</Title2>
                  <Body3>{item.clothes.name}</Body3>
                </div>
              </S.FilterItem>
            );
          })}
      </S.Filter>

      {sameClothData && (
        <S.List>
          {sameClothData[currentIndex].ootdImages[0] && (
            <S.FirstImage>
              <NextImage
                fill={true}
                src={sameClothData[currentIndex].ootdImages[0].imageUrl}
                alt=""
                onClick={() =>
                  onClickListImage(
                    sameClothData[currentIndex].ootdImages[0].ootdId
                  )
                }
              />
            </S.FirstImage>
          )}

          <div className="flexList">
            {sameClothData[currentIndex].ootdImages[1] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootdImages[1].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootdImages[1].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
            {sameClothData[currentIndex].ootdImages[2] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootdImages[2].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootdImages[2].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
            {sameClothData[currentIndex].ootdImages[3] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootdImages[3].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootdImages[3].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
          </div>
        </S.List>
      )}
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
