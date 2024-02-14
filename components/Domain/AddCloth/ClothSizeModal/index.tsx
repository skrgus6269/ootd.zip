import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Body2, Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import { sendReactNativeMessage } from '@/utils/reactNativeMessage';

interface ClothSizeProps {
  isOpen: Boolean;
  setClothSize: Dispatch<SetStateAction<SizeItem | null>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  categoryId: number;
  clothSizeInitial: SizeItem | null;
}

export type SizeItem = {
  id: number;
  name: string;
};

export type SizeListType = SizeItem[][];

let sizes = [
  { id: 0, name: 'Free', lineNo: 1 },
  { id: 1, name: 'XXs', lineNo: 2 },
  { id: 2, name: 'Xs', lineNo: 2 },
  { id: 3, name: 'S', lineNo: 2 },
  { id: 4, name: 'M', lineNo: 3 },
  { id: 5, name: 'L', lineNo: 4 },
  { id: 6, name: 'XL', lineNo: 4 },
  { id: 7, name: 'XXL', lineNo: 4 },
  { id: 8, name: '80', lineNo: 5 },
  { id: 9, name: '85', lineNo: 5 },
  { id: 10, name: '90', lineNo: 5 },
  { id: 11, name: '95', lineNo: 5 },
  { id: 12, name: '100', lineNo: 5 },
  { id: 13, name: '105', lineNo: 5 },
  { id: 14, name: '110', lineNo: 5 },
  { id: 15, name: '2', lineNo: 6 },
  { id: 17, name: '6', lineNo: 6 },
  { id: 18, name: '8', lineNo: 6 },
  { id: 19, name: '10', lineNo: 7 },
  { id: 20, name: '36', lineNo: 7 },
  { id: 21, name: '38', lineNo: 7 },
  { id: 22, name: '40', lineNo: 7 },
  { id: 23, name: '42', lineNo: 7 },
  { id: 24, name: '44', lineNo: 7 },
];

export default function ClothSizeModal({
  isOpen,
  setClothSize,
  setIsOpen,
  categoryId,
  clothSizeInitial,
}: ClothSizeProps) {
  const [selectedClothSize, setSelectedClothSize] = useState<SizeItem | null>(
    null
  );

  const [sizeList, setSizeList] = useState<SizeListType | null>(null);

  useEffect(() => {
    const newSizeList = [] as SizeListType;
    sendReactNativeMessage({ type: 'console', payload: clothSizeInitial });
    if (clothSizeInitial) setSelectedClothSize(clothSizeInitial);

    for (let size of sizes) {
      if (newSizeList.length === 0) {
        newSizeList.push([{ id: size.id, name: size.name }]);
        continue;
      }

      if (newSizeList.length === size.lineNo) {
        newSizeList[newSizeList.length - 1].push({
          id: size.id,
          name: size.name,
        });
        continue;
      }
      newSizeList.push([{ id: size.id, name: size.name }]);
    }
    setSizeList(newSizeList);
  }, []);

  const onClickSize = (row: number, col: number) => {
    setSelectedClothSize(sizeList![row][col]);
  };

  const onClickNextButton = () => {
    setClothSize(selectedClothSize);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} height="70">
      <S.Layout>
        <S.Title>
          <Title1 className="title">사이즈</Title1>
        </S.Title>
        <S.SizeLayout>
          {sizeList &&
            sizeList.map((item, index) => {
              return (
                <S.SizeBlock key={index}>
                  {item.map((items, indexs) => {
                    return (
                      <S.Size
                        onClick={() => onClickSize(index, indexs)}
                        key={indexs}
                        many={item.length}
                        state={selectedClothSize?.id === items.id}
                      >
                        <Body2>{items.name}</Body2>
                      </S.Size>
                    );
                  })}
                </S.SizeBlock>
              );
            })}
        </S.SizeLayout>
        <NextButton
          state={selectedClothSize !== null}
          onClick={onClickNextButton}
          className="nextButton"
        >
          선택 완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
