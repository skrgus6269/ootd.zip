import { Dispatch, SetStateAction } from 'react';
import S from './style';
import BodyInput from '@/components/Domain/SignUp/BodyInput';
import WeightOpen from '@/components/Domain/SignUp/WeightOpen';

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
