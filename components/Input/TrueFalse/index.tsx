import { Dispatch, SetStateAction, useState } from 'react';
import S from './style';
import { Button3 } from '@/components/UI';

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
        <Button3>{left}</Button3>
      </S.LeftButton>
      <S.RightButton
        state={currentState}
        onClick={() => onClickNextButton(right)}
      >
        <Button3>{right}</Button3>
      </S.RightButton>
    </S.Layout>
  );
}

export type { TrueFalseProps };
