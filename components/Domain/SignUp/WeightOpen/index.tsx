import Input from '@/components/Input';
import S from './style';
import { Dispatch, SetStateAction } from 'react';

interface WeightOpenProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export default function WeightOpen({ state, setState }: WeightOpenProps) {
  return (
    <S.Layout>
      <Input.Label size="small">공개여부</Input.Label>
      <Input.TrueFalse
        left="공개"
        right="비공개"
        state={state}
        setState={setState}
      />
      <Input.HelperText className="helperText" state={1}>
        비공개로 설정하면 나만 볼 수 있어요.
      </Input.HelperText>
    </S.Layout>
  );
}
