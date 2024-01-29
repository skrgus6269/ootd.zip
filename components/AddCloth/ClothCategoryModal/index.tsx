import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import ClothCategory from '@/components/ClothCategory';
import { ClothCategoryType } from '@/pages/AddCloth';

interface ClothCategoryModalProps {
  storedClothCategory?: string;
  isOpen: Boolean;
  setClothCategory: Dispatch<SetStateAction<ClothCategoryType | undefined>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

export type SelectedCategoryType = {
  categoryId: number;
  name: string;
};

export default function ClothCategoryModal({
  storedClothCategory,
  isOpen,
  setIsOpen,
  setClothCategory,
}: ClothCategoryModalProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategoryType>();

  const onClickNextButton = () => {
    setClothCategory({
      bigCategory: selectedCategory?.bigCategory!,
      smallCategory: selectedCategory?.smallCategory!,
    });
    setIsOpen(false);
  };

  const onClickSmallCategory = () => {};

  return (
    <Modal height="60%" isOpen={isOpen}>
      <S.Layout>
        <Title1 className="title">카테고리</Title1>
        <ClothCategory
          onClickSmallCategory={onClickSmallCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <NextButton state={true} onClick={onClickNextButton}>
          선택 완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
