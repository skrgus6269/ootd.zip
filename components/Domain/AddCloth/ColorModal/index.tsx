import { Title1, Button3 } from '@/components/UI';
import S from './style';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import ColorList, { ColorListType } from '@/components/ColorList';
import ClothApi from '@/apis/domain/Cloth/ClothApi';
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

  const { getColor } = ClothApi();

  const [colorList, setColorList] = useState<ColorListType>([]);

  useEffect(() => {
    const fetchColor = async () => {
      const color = (await getColor()) as ColorListType;

      const newColor = color.map((item) => {
        return { ...item, state: false };
      });

      setColorList(newColor);
    };
    fetchColor();
  }, []);

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
