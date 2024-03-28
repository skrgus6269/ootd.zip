import { Body3, Button3 } from '@/components/UI';
import S from './style';

interface ClosetEmptyProps {
  text: string;
  button: string;
  onClick: () => void;
}

export default function ClosetEmpty({
  text,
  button,
  onClick,
}: ClosetEmptyProps) {
  return (
    <S.Layout>
      <Body3 className="text">{text}</Body3>
      <button onClick={onClick} className="button">
        <Button3> {button}</Button3>
      </button>
    </S.Layout>
  );
}
