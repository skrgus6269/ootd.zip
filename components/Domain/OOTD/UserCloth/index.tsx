import { Button3, Title1 } from '@/components/UI';
import S from './style';
import Carousel from '@/components/Carousel';
import ClothInformation from '@/components/ClothInformation';
import { useRouter } from 'next/router';

interface UserClothProps {
  data: {
    userName: string;
    cloth: {
      clothId: number;
      bigCategory: string;
      smallCategory: string;
      brand: string;
      size: string;
      clothImage: string;
    }[];
  };
}
export default function UserCloth({ data }: UserClothProps) {
  const router = useRouter();
  return (
    <S.Layout>
      <S.Title>
        <Title1>{data.userName}님의 옷장</Title1>
        <Button3 onClick={() => router.push(`/Closet`)}>더보기</Button3>
      </S.Title>
      <S.Cloth>
        <Carousel slidesToShow={1.1} infinite={false}>
          {data.cloth.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <S.CarouselItem key={item.clothId}>
                  <ClothInformation
                    onClick={() => router.push(`/Cloth/${item.clothId}`)}
                    clothId={item.clothId}
                    clothImage={item.clothImage}
                    caption={'옷장'}
                    headline={item.bigCategory}
                    subHeadline={item.smallCategory}
                    bodyFirst={item.brand}
                    bodySecond={`사이즈 ${item.size}`}
                    icon="like"
                  />
                  {data.cloth[index + 1] && (
                    <ClothInformation
                      onClick={() =>
                        router.push(`Cloth/${data.cloth[index + 1].clothId}`)
                      }
                      clothId={data.cloth[index + 1].clothId}
                      clothImage={data.cloth[index + 1].clothImage}
                      caption={'옷장'}
                      headline={data.cloth[index + 1].bigCategory}
                      subHeadline={data.cloth[index + 1].smallCategory}
                      bodyFirst={data.cloth[index + 1].brand}
                      bodySecond={`사이즈  ${data.cloth[index + 1].size}`}
                      icon="like"
                    />
                  )}
                </S.CarouselItem>
              );
            }
          })}
        </Carousel>
      </S.Cloth>
    </S.Layout>
  );
}
