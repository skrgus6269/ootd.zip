/* eslint-disable @next/next/no-img-element */
import Plusbutton from '@/public/images/plusButton.svg';
import S from './style';
import { Body3 } from '../UI';

interface PlusButtonProps {
  onClickPlusButton: () => void;
}

export default function PlusButton({ onClickPlusButton }: PlusButtonProps) {
  return (
    <S.Layout onClick={onClickPlusButton}>
      <Plusbutton />
      <Body3>추가하기</Body3>
    </S.Layout>
  );
}
