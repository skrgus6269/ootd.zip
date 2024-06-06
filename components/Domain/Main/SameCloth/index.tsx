import { Body3, Headline2, Title2 } from '@/components/UI';
import S from './style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MainApi } from '@/apis/domain/Main/MainApi';
import NextImage from '@/components/NextImage';
import { useRouter } from 'next/router';

type SameClothData = {
  clothesId: number;
  clothesName: string;
  clothesCategory: {
    id: number;
    categoryName: string;
  };
  clothesImageUrl: string;
  clothesColor: {
    id: number;
  }[];
  ootds: {
    ootdId: number;
    imageUrl: string;
    imageCount: number;
  }[];
}[];

export default function SameCloth() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sameClothData, setSameClothData] = useState<SameClothData>([]);

  const { getSameClothDifferentOOTD } = MainApi();

  const fetchDataFunction = async () => {
    const data = await getSameClothDifferentOOTD();
    setSameClothData(data);
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
        {sameClothData.length > 0 &&
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
                  src={item.clothesImageUrl}
                  alt="같은옷"
                />
                <div className="filterItemTrue">
                  <Title2>{item.clothesCategory.categoryName}</Title2>
                  <Body3>{item.clothesName}</Body3>
                </div>
              </S.FilterItem>
            );
          })}
      </S.Filter>

      {sameClothData.length > 0 && (
        <S.List>
          {sameClothData[currentIndex].ootds[0] && (
            <S.FirstImage>
              <NextImage
                fill={true}
                src={sameClothData[currentIndex].ootds[0].imageUrl}
                alt=""
                onClick={() =>
                  onClickListImage(sameClothData[currentIndex].ootds[0].ootdId)
                }
              />
            </S.FirstImage>
          )}

          <div className="flexList">
            {sameClothData[currentIndex].ootds[1] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootds[1].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootds[1].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
            {sameClothData[currentIndex].ootds[2] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootds[2].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootds[2].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
            {sameClothData[currentIndex].ootds[3] && (
              <S.FlexImage>
                <NextImage
                  fill={true}
                  src={sameClothData[currentIndex].ootds[3].imageUrl}
                  alt=""
                  onClick={() =>
                    onClickListImage(
                      sameClothData[currentIndex].ootds[3].ootdId
                    )
                  }
                />
              </S.FlexImage>
            )}
          </div>
        </S.List>
      )}
    </S.Layout>
  );
}
