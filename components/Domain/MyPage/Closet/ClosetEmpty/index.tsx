import { Body3, Button3 } from '@/components/UI';
import S from './style';

interface ClosetEmptyProps {
  text: string;
  button: string;
  onClick: () => void;
  isMyProfile: Boolean;
}

export default function ClosetEmpty({
  text,
  button,
  onClick,
  isMyProfile,
}: ClosetEmptyProps) {
  return (
    <S.Layout>
      <Body3 className="text">{text}</Body3>
      {isMyProfile && (
        <button onClick={onClick} className="button">
          <Button3> {button}</Button3>
        </button>
      )}
    </S.Layout>
  );
}
