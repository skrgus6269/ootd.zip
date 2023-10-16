import Input from '../../Input';
import { Dispatch, SetStateAction } from 'react';

interface TrueFalseProps {
  state: Boolean;
  setState: Dispatch<SetStateAction<Boolean>>;
}

export default function WeightOpen({ state, setState }: TrueFalseProps) {
  return (
    <Input>
      <Input.Label size="small">공개여부</Input.Label>
      <Input.TrueFalse
        left="공개"
        right="비공개"
        state={state}
        setState={setState}
      />
      <Input.HelperText state={1}>
        비공개로 설정하면 나만 볼 수 있어요.
      </Input.HelperText>
    </Input>
  );
}
