import { Body3, Headline3, Subtitle2 } from '@/components/UI';
import S from './style';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react';
import React from 'react';
import { ClothColor } from '@/pages/AddCloth';
import ColorSpan from '@/components/ColorSpan';

interface ColorModalProps {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  setClothColor: Dispatch<SetStateAction<ClothColor>>;
}

export type ColorData = {
  color: string;
  name: string;
  state: Boolean;
};

const colorSampleData = [
  { color: '#BB193E', name: '버건디', state: false },
  { color: '#D50C0C', name: '레드', state: false },
  { color: '#F66800', name: '오렌지', state: false },
  { color: '#F3E219', name: '옐로우', state: false },
  { color: '#764006', name: '브라운', state: false },
  { color: '#C47C26', name: '카멜', state: false },
  { color: '#EBBD87', name: '탄', state: false },
  { color: '#F5ECC3', name: '베이지', state: false },
  { color: '#F5ECC3', name: '아이보리', state: false },
  { color: '#5AD99F', name: '민트', state: false },
  { color: '#21BA21', name: '그린', state: false },
  { color: '#71842F', name: '카키', state: false },
];

const ColorModal = ({ isOpen, setClothColor, setIsOpen }: ColorModalProps) => {
  const [colorList, setColorList] = useState(colorSampleData);

  const [selectedColorList, setSelectedColorList] = useState<ColorData[]>([]);

  useLayoutEffect(() => {
    const selectedColor = colorList.filter((item) => item.state);
    setSelectedColorList(selectedColor);
  }, [colorList]);

  const onClickColorSpan = (index: number) => {
    const sampleColorList = [...colorList];
    sampleColorList[index].state = !sampleColorList[index].state;
    setColorList(sampleColorList);
  };

  const onClickNextButton = () => {
    setClothColor(selectedColorList);
    setIsOpen(false);
  };

  const onClickCloseButton = (name: string) => {
    const sampleColorList = [...colorList];
    colorList.forEach((item, index) => {
      if (item.name === name) {
        sampleColorList[index].state = false;
        setColorList(sampleColorList);
        return;
      }
    });
  };

  return (
    <Modal isOpen={isOpen} height="65%">
      <S.Layout>
        <S.Title>
          <Headline3>색상</Headline3>
        </S.Title>
        <S.ColorList>
          {colorSampleData.map((item, index) => {
            return (
              <ColorSpan
                color={item.color}
                name={item.name}
                state={item.state}
                key={index}
                index={index}
                onClick={onClickColorSpan}
              />
            );
          })}
        </S.ColorList>
        <S.SelectedColorList>
          {selectedColorList.map((item, index) => {
            return (
              <S.SelectedColor key={index}>
                <Subtitle2>{item.name}</Subtitle2>
                <AiOutlineClose onClick={() => onClickCloseButton(item.name)} />
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
