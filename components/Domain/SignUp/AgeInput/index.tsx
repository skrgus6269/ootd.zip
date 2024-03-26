import Input from '@/components/Input';
import S from './style';

interface InputComponentProps {
  onChange: (value: string) => void;
  age: string;
}

export default function AgeInput({ onChange, age }: InputComponentProps) {
  return (
    <Input>
      <S.Layout>
        <Input.Label size="big">나이</Input.Label>
        <Input.Text
          defaultValue={age}
          line="underline"
          size="small"
          unit="세"
          onChange={onChange}
          placeholder="24"
          type="number"
        />
      </S.Layout>
    </Input>
  );
}
