import Input from '@/components/Input';
import S from './style';
import { Style } from '@/pages/AddOOTD';

interface StyleInputProps {
  styleListState: Style[];
  setStyleListState: React.Dispatch<React.SetStateAction<Style[] | null>>;
}
export default function StyleInput({
  styleListState,
  setStyleListState,
}: StyleInputProps) {
  return (
    <Input>
      <S.Layout>
        <Input.Label size="big">선호 스타일</Input.Label>
        <div>
          <Input.CheckBox
            state={styleListState}
            setState={setStyleListState}
          ></Input.CheckBox>
          <Input.HelperText className="helperText" state={2}>
            최소 3개 이상 선택해주세요.
          </Input.HelperText>
        </div>
      </S.Layout>
    </Input>
  );
}
