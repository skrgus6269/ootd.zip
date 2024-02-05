import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetClothCategory from '@/apis/domain/System/SystemApi';
import { Body3 } from '@/components/UI';
import { CategoryListType } from '../Domain/AddCloth/ClothCategoryModal';

interface ClothCategoryModalProps {
  setCategoryList: Dispatch<SetStateAction<CategoryListType[] | null>>;
  setSelectedCategory: Dispatch<SetStateAction<CategoryListType[] | null>>;
  categoryList: CategoryListType[] | null;
  categoryInitital: CategoryListType[] | null;
  type: 'one' | 'many';
}

export default function ClothCategory({
  categoryList,
  categoryInitital,
  setCategoryList,
  setSelectedCategory,
  type,
}: ClothCategoryModalProps) {
  const [getClothCategory] = useGetClothCategory();

  const [bigCategoryClickedIndex, setbigCategoryClickedIndex] =
    useState<number>(0);
  const [smallCategoryClickedIndex, setsmallCategoryClickedIndex] =
    useState<number>(0);

  const [init, setInit] = useState<number>(0);

  useEffect(() => {
    const fetchCategory = async () => {
      // const clothCategory = await getClothCategory();
      const clothCategory = [
        {
          id: 0,
          name: '외투',
          state: false,
          detailCategory: [
            { id: 1, name: '패딩', state: false },
            { id: 2, name: '코트', state: false },
            { id: 3, name: '재킷', state: false },
            { id: 4, name: '무스탕', state: false },
            { id: 5, name: '폴리스', state: false },
            { id: 6, name: '점퍼', state: false },
            { id: 7, name: '바람막이', state: false },
            { id: 8, name: '패딩', state: false },
            { id: 9, name: '코트', state: false },
            { id: 10, name: '재킷', state: false },
            { id: 11, name: '무스탕', state: false },
            { id: 12, name: '폴리스', state: false },
            { id: 13, name: '점퍼', state: false },
            { id: 14, name: '바람막이', state: false },
          ],
        },
        {
          id: 1,
          name: '상의',
          detailCategory: [
            { id: 15, name: '긴소매 티셔츠', state: false },
            { id: 16, name: '반소매 티셔츠', state: false },
            { id: 17, name: '셔츠', state: false },
            { id: 18, name: '후디', state: false },
            { id: 19, name: '폴리스', state: false },
            { id: 20, name: '스웨트셔츠/맨투맨', state: false },
            { id: 21, name: '슬리브리스', state: false },
            { id: 22, name: '피케/카라', state: false },
          ],
        },
      ];

      setCategoryList(clothCategory);
      setInit(init + 1);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    if (categoryInitital && categoryList) {
      let newCategory = JSON.parse(
        JSON.stringify(categoryList)
      ) as CategoryListType[];

      categoryInitital.map((item) => {
        if (item.state) {
          newCategory = newCategory.map((items) => {
            if (item.id === items.id) return { ...items, state: true };
            return items;
          });
        }
        for (let i = 0; i < newCategory.length; i++) {
          for (let j = 0; j < newCategory[i].detailCategory!.length; j++) {
            if (
              newCategory[i].detailCategory![j].id ===
              item.detailCategory![0].id
            ) {
              newCategory[i].detailCategory![j].state = true;
            }
          }
        }
      });
      setCategoryList(newCategory);
    }
  }, [init]);

  const onClickBigCategory = (id: number, index: number) => {
    setbigCategoryClickedIndex(index);

    let newCategory = JSON.parse(JSON.stringify(categoryList));

    newCategory[index].state = !newCategory[index].state;

    newCategory[index].detailCategory = newCategory[index].detailCategory?.map(
      (item: CategoryListType) => {
        return { ...item, state: false };
      }
    );

    setCategoryList(newCategory);
  };

  const onClickSmallCategory = (index: number) => {
    setsmallCategoryClickedIndex(index);

    const newCategory = JSON.parse(JSON.stringify(categoryList));

    newCategory[bigCategoryClickedIndex].state = false;

    newCategory[bigCategoryClickedIndex].detailCategory[index].state =
      !newCategory[bigCategoryClickedIndex].detailCategory[index].state;
    setCategoryList(newCategory);
  };

  useEffect(() => {
    const selectedCategory = [] as CategoryListType[];

    if (categoryList) {
      for (let i = 0; i < categoryList?.length; i++) {
        if (categoryList[i].state) selectedCategory.push(categoryList[i]);
        if (categoryList[i].detailCategory!.length > 0)
          for (let j = 0; j < categoryList[i].detailCategory!.length; j++) {
            if (categoryList[i].detailCategory![j].state) {
              selectedCategory.push({
                id: categoryList[i].id,
                name: categoryList[i].name,
                state: categoryList[i].state,
                detailCategory: [categoryList![i].detailCategory![j]],
              });
            }
          }
      }
    }

    setSelectedCategory(selectedCategory.length > 0 ? selectedCategory : null);
  }, [categoryList]);

  return (
    <S.Layout>
      <S.Category>
        <S.BigCategory>
          {categoryList &&
            categoryList.map((item, index) => {
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
          {categoryList &&
            categoryList![bigCategoryClickedIndex].detailCategory!.map(
              (item, index) => {
                return (
                  <S.SmallCategorySpan
                    state={
                      type === 'one'
                        ? smallCategoryClickedIndex === index
                        : item.state === true
                    }
                    onClick={() => onClickSmallCategory(index)}
                    key={index}
                  >
                    <Body3>{item.name}</Body3>
                  </S.SmallCategorySpan>
                );
              }
            )}
        </S.SmallCategory>
      </S.Category>
    </S.Layout>
  );
}
