import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetClothCategory from '@/hooks/useGetClothCategory';
import { Body3 } from '@/components/UI';
import {
  CategoryListType,
  SelectedCategoryType,
} from '../AddCloth/ClothCategoryModal';

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
          categoryId: 1,
          bigCategory: '외투',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 2,
          bigCategory: '상의',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 3,
          bigCategory: '니트웨어',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 4,
          bigCategory: '하의',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 5,
          bigCategory: '원피스',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 7,
          bigCategory: '신발',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 8,
          bigCategory: '가방',
          type: 'LargeCategory',
          state: false,
        },
        {
          categoryId: 9,
          bigCategory: 'ACC',
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
        categoryId: 10,
        bigCategory: '아우터',
        smallCategory: '재킷',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 11,
        bigCategory: '아우터',
        smallCategory: '겨울코트',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 12,
        bigCategory: '아우터',
        smallCategory: '트렌치코트',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 13,
        bigCategory: '아우터',
        smallCategory: '점퍼',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 14,
        bigCategory: '아우터',
        smallCategory: '후드집업',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 15,
        bigCategory: '아우터',
        smallCategory: '패딩',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 16,
        bigCategory: '아우터',
        smallCategory: '가죽',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 17,
        bigCategory: '아우터',
        smallCategory: '퍼',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 18,
        bigCategory: '아우터',
        smallCategory: '플리스',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 19,
        bigCategory: '아우터',
        smallCategory: '베스트',
        type: 'DetailCategory',
        state: false,
      },
      {
        categoryId: 20,
        bigCategory: '아우터',
        smallCategory: '바람막이/나일론',
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
        return {
          categoryId: item.categoryId,
          bigCategory: item.bigCategory,
          smallCategory: item.smallCategory,
        };
      });

    setSelectedCategory(selectedSmallCategoryList);
  }, [smallCategoryList]);

  useEffect(() => {
    const newBigCategoryList = [...bigCategoryList];

    const selectedBigCategoryList = newBigCategoryList
      .filter((item) => item.state)
      .map((item) => {
        return {
          categoryId: item.categoryId,
          bigCategory: item.bigCategory,
          smallCategory: null,
        };
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
                onClick={() => onClickBigCategory(item.categoryId, index)}
                state={index === bigCategoryClickedIndex}
                key={index}
              >
                <Body3>{item.bigCategory}</Body3>
              </S.BigCategorySpan>
            );
          })}
        </S.BigCategory>
        <S.SmallCategory>
          {smallCategoryList.map((item, index) => {
            return (
              <S.SmallCategorySpan
                state={item.state === true}
                onClick={() => onClickSmallCategorySpan(index)}
                key={index}
              >
                <Body3>{item.smallCategory}</Body3>
              </S.SmallCategorySpan>
            );
          })}
        </S.SmallCategory>
      </S.Category>
    </S.Layout>
  );
}
