import { Title1, Button3 } from '@/components/UI';
import S from './style';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useState } from 'react';
import React from 'react';
import ColorList, { ColorListType } from '@/components/ColorList';
interface ColorModalProps {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  setClothColor: Dispatch<SetStateAction<ColorListType | null>>;
  colorInitial: ColorListType | null;
}

const ColorModal = ({
  isOpen,
  setClothColor,
  setIsOpen,
  colorInitial,
}: ColorModalProps) => {
  const [selectedColorList, setSelectedColorList] =
    useState<ColorListType | null>(null);

  const [colorList, setColorList] = useState<ColorListType>([
    { colorId: 0, color: '#BB193E', name: '버건디', state: false },
    { colorId: 1, color: '#D50C0C', name: '레드', state: false },
    { colorId: 2, color: '#F66800', name: '오렌지', state: false },
    { colorId: 3, color: '#F3E219', name: '옐로우', state: false },
    { colorId: 4, color: '#764006', name: '브라운', state: false },
    { colorId: 5, color: '#C47C26', name: '카멜', state: false },
    { colorId: 6, color: '#EBBD87', name: '탄', state: false },
    { colorId: 7, color: '#F5ECC3', name: '베이지', state: false },
    { colorId: 8, color: '#F5ECC3', name: '아이보리', state: false },
    { colorId: 9, color: '#5AD99F', name: '민트', state: false },
    { colorId: 10, color: '#21BA21', name: '그린', state: false },
    { colorId: 11, color: '#71842F', name: '카키', state: false },
  ]);

  const onClickNextButton = () => {
    setClothColor(selectedColorList);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} height="60">
      <S.Layout>
        <S.Title>
          <Title1>색상</Title1>
        </S.Title>
        <ColorList
          setSelectedColorList={setSelectedColorList}
          colorList={colorList}
          setColorList={setColorList}
          selectedColorList={selectedColorList}
          colorInitital={colorInitial}
        />
        <S.SelectedColorList>
          {selectedColorList !== null &&
            selectedColorList.map((item, index) => {
              return (
                <S.SelectedColor key={index}>
                  <Button3 className="selectedColor">{item.name}</Button3>
                  <AiOutlineClose onClick={() => ''} />
                </S.SelectedColor>
              );
            })}
        </S.SelectedColorList>
        <NextButton
          onClick={onClickNextButton}
          state={true}
          className="nextButton"
        >
          선택완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
};

export default ColorModal;
