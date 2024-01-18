import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetClothCategory from '@/hooks/useGetClothCategory';
import { Body3, Button3, Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import Header from '@/components/Header';

interface ClothCategoryModalProps {
  isOpen: Boolean;
  setClothCategory: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

type ClothCategoryProps = {
  bigCategory: string;
  smallCategory: string[];
}[];

export default function ClothCategoryModal({
  isOpen,
  setIsOpen,
  setClothCategory,
}: ClothCategoryModalProps) {
  const [getClothCategory] = useGetClothCategory();

  const [clothCategories, setClothCategories] = useState<ClothCategoryProps>();
  const [bigCategoryClickedIndex, setbigCategoryClickedIndex] = useState(0);
  const [smallCategoryClickedIndex, setsmallCategoryClickedIndex] =
    useState<number>();

  useEffect(() => {
    const fetchCategory = async () => {
      // const clothCategory = await getClothCategory();
      const clothCategory = [
        {
          bigCategory: '외투',
          smallCategory: [
            '패딩',
            '코트',
            '재킷',
            '무스탕',
            '폴리스',
            '점퍼',
            '바람막이',
            '패딩',
            '코트',
            '재킷',
            '무스탕',
            '폴리스',
            '점퍼',
            '바람막이',
          ],
        },
        {
          bigCategory: '상의',
          smallCategory: [
            '긴소매 티셔츠',
            '반소매 티셔츠',
            '셔츠',
            '후디',
            '스웨트셔츠/맨투맨',
            '슬리브리스',
            '피케/카라',
          ],
        },
        {
          bigCategory: '하의',
          smallCategory: [
            '긴소매 티셔츠',
            '반소매 티셔츠',
            '셔츠',
            '후디',
            '스웨트셔츠/맨투맨',
            '슬리브리스',
            '피케/카라',
          ],
        },
        {
          bigCategory: '신발',
          smallCategory: [
            '긴소매 티셔츠',
            '반소매 티셔츠',
            '셔츠',
            '후디',
            '스웨트셔츠/맨투맨',
            '슬리브리스',
            '피케/카라',
          ],
        },
      ];
      setClothCategories(clothCategory);
    };
    fetchCategory();
  }, []);

  const selectCategoryDone = () => {
    setIsOpen(false);

    const bigCategory = clothCategories![bigCategoryClickedIndex].bigCategory;
    const smallCategory =
      clothCategories![bigCategoryClickedIndex].smallCategory[
        smallCategoryClickedIndex!
      ];

    setClothCategory(`${bigCategory},${smallCategory}`);
  };

  return (
    <Modal height="60%" isOpen={isOpen}>
      <S.Layout>
        <Header text="카테고리" />
        <S.Category>
          <S.BigCategory>
            {clothCategories &&
              clothCategories.map((item, index) => {
                return (
                  <S.BigCategorySpan
                    onClick={() => setbigCategoryClickedIndex(index)}
                    state={index === bigCategoryClickedIndex}
                    key={index}
                  >
                    <Body3>{item.bigCategory}</Body3>
                  </S.BigCategorySpan>
                );
              })}
          </S.BigCategory>
          <S.SmallCategory>
            {clothCategories &&
              clothCategories[bigCategoryClickedIndex].smallCategory.map(
                (item, index) => {
                  return (
                    <S.SmallCategorySpan
                      state={index === smallCategoryClickedIndex}
                      onClick={() => setsmallCategoryClickedIndex(index)}
                      key={index}
                    >
                      <Body3>{item}</Body3>
                    </S.SmallCategorySpan>
                  );
                }
              )}
          </S.SmallCategory>
        </S.Category>
        <NextButton
          state={typeof smallCategoryClickedIndex === 'number'}
          onClick={selectCategoryDone}
        >
          <Button3>선택 완료</Button3>
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
