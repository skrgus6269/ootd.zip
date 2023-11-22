import Image from 'next/image';
import S from './style';
import CheckBoxTrue from 'public/images/checkBoxTrue.png';
import CheckBoxFalse from 'public/images/checkBoxFalse.png';
import Body from '@/components/UI/TypoGraphy/Body2';
import { useCallback } from 'react';

interface BoxProps {
  value: Boolean;
  tag: string;
}

interface CheckBoxProps {
  state: BoxProps[];
  setState: React.Dispatch<React.SetStateAction<BoxProps[]>>;
}

const CheckBox = ({ state, setState }: CheckBoxProps) => {
  const onClickCheckBox = (index: number) => {
    const { value: currentValue, tag: currentTag } = state[index];
    const leftCheckBox = state.slice(0, index);
    const rightCheckBox = state.slice(index + 1);
    setState([
      ...leftCheckBox,
      { value: !currentValue, tag: currentTag },
      ...rightCheckBox,
    ]);
  };

  return (
    <S.Layout>
      {state &&
        state.map((item, index) => {
          return (
            <S.Box onClick={() => onClickCheckBox(index)} key={index}>
              <>
                <S.Image>
                  {item.value && (
                    <Image src={CheckBoxTrue} alt="CheckBoxTrue" />
                  )}
                  {!item.value && (
                    <Image src={CheckBoxFalse} alt="CheckBoxFalse" />
                  )}
                </S.Image>
                <S.Tag>
                  <Body>{item.tag}</Body>
                </S.Tag>
              </>
            </S.Box>
          );
        })}
    </S.Layout>
  );
};

export default CheckBox;
