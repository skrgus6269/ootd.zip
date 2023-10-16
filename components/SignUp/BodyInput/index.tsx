import Input from '../../Input';
import { InputProps } from '../IdInput';

export default function BodyInput({ setInput }: InputProps) {
  return (
    <Input>
      <Input.Label size="small">신장</Input.Label>
      <Input.Text
        size="small"
        unit="cm"
        placeholder="placeholder"
        onChange={setInput}
      />
    </Input>
  );
}
