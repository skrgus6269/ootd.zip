/* eslint-disable @next/next/no-img-element */
import { Headline2, Subtitle2 } from '@/components/UI';
import S from './style';
import Carousel from '@/components/Carousel';
import ClothInformation from '@/components/ClothInformation';

interface TodayRecommendSampleData {
  data: {
    ootdImage: string;
    item: {
      itemImage: string;
      caption: string;
      brand: string;
      category: string;
      name: string;
      size: string;
    }[];
  }[];
}

export default function TodayRecommend(props: TodayRecommendSampleData) {
  return (
    <S.Layout>
      <S.Weather>
        <Headline2>오늘 입기 좋은 옷</Headline2>
        <Subtitle2>최고온도 00.0℃ 최저온도 00.0℃ </Subtitle2>
      </S.Weather>
      <S.CarouselLayout>
        <Carousel slidesToShow={1.05} infinite={false}>
          {props.data.map((item, index) => {
            return (
              <S.CarouselItem key={index}>
                <img src={item.ootdImage} alt="오늘의 ootd" />
                {item.item.map((item, index) => {
                  return (
                    <ClothInformation
                      key={index}
                      clothImage={item.itemImage}
                      caption={item.caption}
                      headline={item.brand}
                      subHeadline={item.category}
                      bodyFirst={item.name}
                      bodySecond={item.size}
                      icon="like"
                    />
                  );
                })}
              </S.CarouselItem>
            );
          })}
        </Carousel>
      </S.CarouselLayout>
    </S.Layout>
  );
}
