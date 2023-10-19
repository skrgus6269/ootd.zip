import BodyInput from '@/components/SignUp/BodyInput';
import WeightOpen from '@/components/SignUp/WeightOpen';
import { Dispatch, SetStateAction } from 'react';
import S from './style';

interface BodyInfoProps {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
  heightSetState: Dispatch<SetStateAction<string>>;
  weightSetState: Dispatch<SetStateAction<string>>;
}

export default function BodyInfo({
  open,
  setOpen,
  heightSetState,
  weightSetState,
}: BodyInfoProps) {
  return (
    <S.Layout>
      <BodyInput
        heightSetState={heightSetState}
        weightSetState={weightSetState}
      />
      <WeightOpen state={open} setState={setOpen} />
    </S.Layout>
  );
}
