import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useState } from 'react';
import { Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import ClothCategory from '@/components/ClothCategory';

interface ClothCategoryModalProps {
  isOpen: Boolean;
  setClothCategory: Dispatch<SetStateAction<CategoryListType[] | null>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  categoryInitial?: CategoryListType[] | null;
}

export type CategoryType = {
  id: number;
  name: string;
  state?: Boolean;
};

export type CategoryListType = {
  id: number;
  name: string;
  state?: Boolean;
  detailCategories?: CategoryType[];
};

export default function ClothCategoryModal({
  isOpen,
  setIsOpen,
  setClothCategory,
  categoryInitial,
}: ClothCategoryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryListType[] | null
  >(null);

  const [categoryList, setCategoryList] = useState<CategoryListType[] | null>(
    null
  );

  const onClickNextButton = () => {
    setClothCategory(selectedCategory);
    setIsOpen(false);
  };

  return (
    <Modal height="60" isOpen={isOpen}>
      <S.Layout>
        <Title1 className="title">카테고리</Title1>
        <ClothCategory
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          setSelectedCategory={setSelectedCategory}
          type="one"
          categoryInitital={categoryInitial}
        />
        <NextButton state={true} onClick={onClickNextButton}>
          선택 완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
