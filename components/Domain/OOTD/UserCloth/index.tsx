import { Button3, Title1 } from '@/components/UI';
import S from './style';
import Carousel from '@/components/Carousel';
import ClothInformation from '@/components/ClothInformation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import ClothApi from '@/apis/domain/Cloth/ClothApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface UserClothDataType {
  id: number;
  name: string;
  userName: string;
  brand: { id: string; name: string };
  category: { id: number; categoryName: string; parentCategoryName: string };
  size: { id: number; name: string; lineNo: string };
  memo: string;
  imageUrl: string;
}

interface UserClothProps {
  userName: string;
  userId: number;
}
export default function UserCloth({ userName, userId }: UserClothProps) {
  const router = useRouter();
  const { getUserClothList } = ClothApi();

  const fetchDataFunction = async (page: number, size: number) => {
    const data = await getUserClothList({
      page,
      size,
      userId,
    });

    return data;
  };

  const { data: userClothData } = useInfiniteScroll({
    fetchDataFunction,
    initialData: [],
    size: 10,
  });

  useEffect(() => {
    console.log(userClothData);
    setData(userClothData);
  }, [userClothData]);

  const [data, setData] = useState<UserClothDataType[] | null>(null);
  return (
    <S.Layout>
      <S.Title>
        <Title1>{userName}님의 옷장</Title1>
        <Button3 onClick={() => router.push(`/mypage/${userId}`)}>
          더보기
        </Button3>
      </S.Title>
      <S.Cloth>
        <Carousel slidesToShow={1.1} infinite={false} dots={false}>
          {data &&
            data.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <S.CarouselItem key={item.id}>
                    <ClothInformation
                      onClick={() => router.push(`/cloth/${item.id}`)}
                      clothId={item.id}
                      clothImage={item.imageUrl}
                      caption={'옷장'}
                      brand={item.brand.name}
                      category={item.category.categoryName}
                      name={item.name}
                      clothSize={`${item.size.name}`}
                    />
                    {data[index + 1] && (
                      <ClothInformation
                        onClick={() =>
                          router.push(`cloth/${data[index + 1].id}`)
                        }
                        clothId={data[index + 1].id}
                        clothImage={data[index + 1].imageUrl}
                        caption={'옷장'}
                        brand={data[index + 1].brand.name}
                        category={data[index + 1].category.categoryName}
                        name={data[index + 1].name}
                        clothSize={`${data[index + 1].size.name}`}
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
