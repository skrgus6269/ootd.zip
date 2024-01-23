import { Dispatch, SetStateAction, useState } from 'react';
import S from './style';
import { Button3 } from '@/components/UI';

interface PrevNextProps {
  left: string;
  right: string;
  leftButtonOnClick: () => void;
  rightButtonOnClick: () => void;
}

export default function TrueFalse({
  left,
  right,
  leftButtonOnClick,
  rightButtonOnClick,
}: PrevNextProps) {
  return (
    <S.Layout>
      <S.LeftButton onClick={leftButtonOnClick}>
        <Button3>{left}</Button3>
      </S.LeftButton>
      <S.RightButton onClick={rightButtonOnClick}>
        <Button3>{right}</Button3>
      </S.RightButton>
    </S.Layout>
  );
}

export type { PrevNextProps };
