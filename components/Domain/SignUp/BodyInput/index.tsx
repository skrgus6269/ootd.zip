import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import S from './style';

interface BodyInputProps {
  heightSetState: Dispatch<SetStateAction<string>>;
  weightSetState: Dispatch<SetStateAction<string>>;
}

export default function BodyInput({
  heightSetState,
  weightSetState,
}: BodyInputProps) {
  return (
    <S.Layout>
      <Input>
        <Input.Label size="big">체형</Input.Label>
        <S.BodyLayout>
          <S.Weight>
            <Input.Label size="small">신장</Input.Label>
            <Input.Text
              line="underline"
              size="small"
              unit="cm"
              placeholder="160"
              onChange={heightSetState}
              type="number"
            />
          </S.Weight>
          <S.Height>
            <Input.Label size="small">몸무게</Input.Label>
            <Input.Text
              line="underline"
              size="small"
              unit="kg"
              placeholder="40"
              onChange={weightSetState}
              type="number"
            />
          </S.Height>
        </S.BodyLayout>
      </Input>
    </S.Layout>
  );
}

export type { BodyInputProps };
