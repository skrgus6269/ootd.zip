import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetClothCategory from '@/hooks/useGetClothCategory';
import { Body3 } from '@/components/UI';
import { SelectedCategoryType } from '../AddCloth/ClothCategoryModal';
import { CategoryListType } from '../MyPage/Closet/FilterModal';

interface ClothCategoryModalProps {
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategoryType[] | null>>;
  bigCategoryList: CategoryListType[];
  setBigCategoryList: Dispatch<SetStateAction<CategoryListType[]>>;
  smallCategoryList: CategoryListType[];
  setSmallCategoryList: Dispatch<SetStateAction<CategoryListType[]>>;
}

export default function ClothCategory({
  setSelectedCategory,
  smallCategoryList,
  setSmallCategoryList,
  bigCategoryList,
  setBigCategoryList,
}: ClothCategoryModalProps) {
  const [getClothBigCategory, getClothSmallCategory] = useGetClothCategory();

  const [bigCategoryClickedIndex, setbigCategoryClickedIndex] =
    useState<number>(0);
  const [smallCategoryClickedIndex, setsmallCategoryClickedIndex] =
    useState<number>(0);

  useEffect(() => {
    const fetchCategory = async () => {
      // const clothCategory = await getClothCategory();
      const clothCategory = [
        {
          id: 1,
          name: '외투',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 2,
          name: '상의',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 3,
          name: '니트웨어',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 4,
          name: '하의',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 5,
          name: '원피스',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 7,
          name: '신발',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 8,
          name: '가방',
          type: 'LargeCategory',
          state: false,
        },
        {
          id: 9,
          name: 'ACC',
          type: 'LargeCategory',
          state: false,
        },
      ];

      setBigCategoryList(clothCategory);
    };
    fetchCategory();
  }, []);

  const onClickBigCategory = (categoryId: number, index: number) => {
    setbigCategoryClickedIndex(index);

    // getClothSmallCategory(bigCategoryList[index].id);
    const newBigCategoryList = [...bigCategoryList];
    newBigCategoryList[index].state = !newBigCategoryList[index].state;
    setBigCategoryList(newBigCategoryList);

    setSmallCategoryList([
      {
        id: 10,
        name: '재킷',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 11,
        name: '겨울코트',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 12,
        name: '트렌치코트',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 13,
        name: '점퍼',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 14,
        name: '후드집업',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 15,
        name: '패딩',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 16,
        name: '가죽',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 17,
        name: '퍼',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 18,
        name: '플리스',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 19,
        name: '베스트',
        type: 'DetailCategory',
        state: false,
      },
      {
        id: 20,
        name: '바람막이/나일론',
        type: 'DetailCategory',
        state: false,
      },
    ]);
  };

  const onClickSmallCategorySpan = (index: number) => {
    setsmallCategoryClickedIndex(index);

    const newSmallCategoryList = [...smallCategoryList];
    newSmallCategoryList[index].state = !newSmallCategoryList[index].state;
    setSmallCategoryList(newSmallCategoryList);
  };

  useEffect(() => {
    const newSmallCategoryList = [...smallCategoryList];

    const selectedSmallCategoryList = newSmallCategoryList
      .filter((item) => item.state)
      .map((item) => {
        return { categoryId: item.id, name: item.name };
      });

    setSelectedCategory(selectedSmallCategoryList);
  }, [smallCategoryList]);

  useEffect(() => {
    const newBigCategoryList = [...bigCategoryList];

    const selectedBigCategoryList = newBigCategoryList
      .filter((item) => item.state)
      .map((item) => {
        return { categoryId: item.id, name: item.name };
      });

    setSelectedCategory(selectedBigCategoryList);
  }, [bigCategoryList]);

  return (
    <S.Layout>
      <S.Category>
        <S.BigCategory>
          {bigCategoryList.map((item, index) => {
            return (
              <S.BigCategorySpan
                onClick={() => onClickBigCategory(item.id, index)}
                state={index === bigCategoryClickedIndex}
                key={index}
              >
                <Body3>{item.name}</Body3>
              </S.BigCategorySpan>
            );
          })}
        </S.BigCategory>
        <S.SmallCategory>
          {smallCategoryList.map((item, index) => {
            return (
              <S.SmallCategorySpan
                state={item.state}
                onClick={() => onClickSmallCategorySpan(index)}
                key={index}
              >
                <Body3>{item.name}</Body3>
              </S.SmallCategorySpan>
            );
          })}
        </S.SmallCategory>
      </S.Category>
    </S.Layout>
  );
}