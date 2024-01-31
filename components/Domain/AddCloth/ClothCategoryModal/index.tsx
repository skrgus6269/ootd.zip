import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useState } from 'react';
import { Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import ClothCategory from '@/components/ClothCategory';

interface ClothCategoryModalProps {
  isOpen: Boolean;
  setClothCategory: Dispatch<SetStateAction<SelectedCategoryType[] | null>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

export type SelectedCategoryType = {
  categoryId: number;
  bigCategory: string;
  smallCategory: string | null;
};

export interface CategoryListType {
  categoryId: number;
  type?: string;
  state?: Boolean;
  bigCategory: string;
  smallCategory: string | null;
}

export default function ClothCategoryModal({
  isOpen,
  setIsOpen,
  setClothCategory,
}: ClothCategoryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    SelectedCategoryType[] | null
  >(null);

  const [bigCategoryList, setBigCategoryList] = useState<CategoryListType[]>(
    []
  );
  const [smallCategoryList, setSmallCategoryList] = useState<
    CategoryListType[]
  >([]);

  const onClickNextButton = () => {
    setClothCategory(selectedCategory);
    setIsOpen(false);
  };

  return (
    <Modal height="60" isOpen={isOpen}>
      <S.Layout>
        <Title1 className="title">카테고리</Title1>
        <ClothCategory
          type="one"
          setSelectedCategory={setSelectedCategory}
          smallCategoryList={smallCategoryList}
          setSmallCategoryList={setSmallCategoryList}
          bigCategoryList={bigCategoryList}
          setBigCategoryList={setBigCategoryList}
        />
        <NextButton state={true} onClick={onClickNextButton}>
          선택 완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
