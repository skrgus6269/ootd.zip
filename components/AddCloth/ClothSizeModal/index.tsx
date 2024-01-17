import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useState } from 'react';
import { Body2, Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';

interface ClothSizeProps {
  isOpen: Boolean;
  setClothSize: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  bigCategory: string;
}

const TopSize = [
  ['Free'],
  ['XXs', 'Xs', 'S'],
  ['M'],
  ['L', 'XL', 'XXL'],
  ['80', '85', '90', ' 95', '100', '105', '110'],
  ['2', '4', '6', '8', '10'],
  ['36', '38', '40', '42', '44'],
];
const BottomSize = [
  ['Free'],
  ['XXs', 'Xs', 'S'],
  ['M'],
  ['L', 'XL', 'XXL'],
  ['24', '25', '26', '27', '28'],
  ['29', '30', '31', '32', '33'],
  ['34', '36', '38'],
];
const ShoeSize = [
  ['220', '225', '230', '235', '240'],
  ['245', '250', '255', '260', '265'],
  ['270', '275', '280', '285', '290'],
  ['295', '300', '305', '310', '315'],
];

export default function ClothSizeModal({
  isOpen,
  setClothSize,
  setIsOpen,
  bigCategory,
}: ClothSizeProps) {
  const [selectedClothSize, setSelectedClothSize] = useState<string>('');

  const onClickSize = (row: number, col: number) => {
    if (bigCategory === '외투' || bigCategory === '상의') {
      setSelectedClothSize(String(TopSize[row][col]));
      return;
    }
    if (bigCategory === '하의') {
      setSelectedClothSize(String(BottomSize[row][col]));
      return;
    }
    if (bigCategory === '신발') {
      setSelectedClothSize(String(ShoeSize[row][col]));
    }
  };

  const onClickNextButton = () => {
    setClothSize(selectedClothSize);
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} height="75%">
      <S.Layout>
        <S.Title>
          <Title1>사이즈</Title1>
        </S.Title>
        <S.SizeLayout>
          {ShoeSize.map((item, index) => {
            return (
              <S.SizeBlock key={index}>
                {item.map((items, indexs) => {
                  return (
                    <S.Size
                      onClick={() => onClickSize(index, indexs)}
                      key={indexs}
                      many={item.length}
                      state={selectedClothSize === items}
                    >
                      <Body2>{items}</Body2>
                    </S.Size>
                  );
                })}
              </S.SizeBlock>
            );
          })}
        </S.SizeLayout>
        <NextButton
          state={selectedClothSize.length > 0}
          onClick={onClickNextButton}
          className="nextButton"
        >
          선택 완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
