import Image from 'next/image';
import S from './style';
import CheckBoxTrue from '@/public/images/CheckBoxTrue.png';
import CheckBoxFalse from '@/public/images/CheckBoxFalse.png';
import Body2 from '@/components/UI/TypoGraphy/Body2';

interface BoxProps {
  id: number;
  state?: Boolean;
  name: string;
}

interface CheckBoxProps {
  state: BoxProps[];
  setState: React.Dispatch<React.SetStateAction<BoxProps[]>>;
}

const CheckBox = ({ state, setState }: CheckBoxProps) => {
  const onClickCheckBox = (index: number) => {
    const {
      state: currentValue,
      name: currentTag,
      id: currentId,
    } = state[index];
    const leftCheckBox = state.slice(0, index);
    const rightCheckBox = state.slice(index + 1);
    setState([
      ...leftCheckBox,
      { state: !currentValue, name: currentTag, id: currentId },
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
                  {item.state && (
                    <Image src={CheckBoxTrue} alt="CheckBoxTrue" />
                  )}
                  {!item.state && (
                    <Image src={CheckBoxFalse} alt="CheckBoxFalse" />
                  )}
                </S.Image>
                <S.Tag>
                  <Body2>{item.name}</Body2>
                </S.Tag>
              </>
            </S.Box>
          );
        })}
    </S.Layout>
  );
};

export default CheckBox;
