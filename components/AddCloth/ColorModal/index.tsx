import { Body3, Title1, Button3 } from '@/components/UI';
import S from './style';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useState } from 'react';
import React from 'react';
import { ClothColor } from '@/pages/AddCloth';
import ColorList, { ColorData } from '@/components/ColorList';
import { useRecoilState } from 'recoil';
import { ClothColorList } from '@/utils/recoil/atom';

interface ColorModalProps {
  storedClothColor?: ClothColor;
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  setClothColor: Dispatch<SetStateAction<ClothColor>>;
}

const ColorModal = ({ isOpen, setClothColor, setIsOpen }: ColorModalProps) => {
  const [selectedColorList, setSelectedColorList] = useState<ColorData[]>([]);
  const [colorList, setColorList] = useRecoilState(ClothColorList);

  const onClickNextButton = () => {
    // setClothColor(selectedColorList);
    setIsOpen(false);
  };

  const onClickDeleteSelectedColorList = (name: string) => {
    const updatedColorList = colorList.map((item) =>
      item.name === name ? { ...item, state: false } : item
    );
    setColorList(updatedColorList);
  };

  return (
    <Modal isOpen={isOpen} height="65%">
      <S.Layout>
        <S.Title>
          <Title1>색상</Title1>
        </S.Title>
        {/* <ColorList setSelectedColorList={setSelectedColorList} /> */}
        <S.SelectedColorList>
          {selectedColorList.map((item, index) => {
            return (
              <S.SelectedColor key={index}>
                <Button3 className="selectedColor">{item.name}</Button3>
                <AiOutlineClose
                  onClick={() => onClickDeleteSelectedColorList(item.name)}
                />
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
