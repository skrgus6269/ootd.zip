import Input from '@/components/Input';
import S from './style';

interface BoxProps {
  value: Boolean;
  tag: string;
}

interface StyleInputProps {
  styleListState: BoxProps[];
  setStyleListState: React.Dispatch<React.SetStateAction<BoxProps[]>>;
}
export default function StyleInput({
  styleListState,
  setStyleListState,
}: StyleInputProps) {
  return (
    <S.Layout>
      <Input>
        <Input.Label size="big">선호 스타일</Input.Label>
        <Input.CheckBox
          state={styleListState}
          setState={setStyleListState}
        ></Input.CheckBox>
        <Input.HelperText state={2}>
          최소 3개 이상 선택해주세요.
        </Input.HelperText>
      </Input>
    </S.Layout>
  );
}
