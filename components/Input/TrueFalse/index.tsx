import { Dispatch, SetStateAction, useState } from 'react';
import S from './style';
import Button from '@/components/UI/TypoGraphy/Button1';

interface TrueFalseProps {
  left: string;
  right: string;
  state: Boolean;
  setState: Dispatch<SetStateAction<Boolean>>;
}

export default function TrueFalse({
  left,
  right,
  state,
  setState,
}: TrueFalseProps) {
  const onClickButton = () => {
    setState(!state);
  };

  return (
    <S.Layout>
      <S.LeftButton state={state} onClick={onClickButton}>
        <Button>{left}</Button>
      </S.LeftButton>
      <S.RightButton state={state} onClick={onClickButton}>
        <Button>{right}</Button>
      </S.RightButton>
    </S.Layout>
  );
}
