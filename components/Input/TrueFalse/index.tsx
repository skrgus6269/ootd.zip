import { Dispatch, SetStateAction, useState } from 'react';
import S from './style';
import Button from '@/components/UI/TypoGraphy/Button1';

interface TrueFalseProps {
  left: string;
  right: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export default function TrueFalse({ left, right, setState }: TrueFalseProps) {
  const [currentState, setCurrentState] = useState<Boolean>(true);

  const onClickNextButton = (value: string) => {
    setState(value);
    setCurrentState(!currentState);
  };

  return (
    <S.Layout>
      <S.LeftButton
        state={currentState}
        onClick={() => onClickNextButton(left)}
      >
        <Button>{left}</Button>
      </S.LeftButton>
      <S.RightButton
        state={currentState}
        onClick={() => onClickNextButton(right)}
      >
        <Button>{right}</Button>
      </S.RightButton>
    </S.Layout>
  );
}

export type { TrueFalseProps };
