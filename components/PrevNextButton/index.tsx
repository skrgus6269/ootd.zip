import { Button3 } from '../UI';
import S from './style';

interface PrevNextButtonProps {
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
  prev: string;
  next: string;
  className?: string;
}

export default function PrevNextButton({
  onClickPrevButton,
  onClickNextButton,
  prev,
  next,
  className,
}: PrevNextButtonProps) {
  return (
    <S.Layout className={className}>
      <button onClick={onClickPrevButton} className="leftButton">
        <Button3>{prev}</Button3>
      </button>
      <button onClick={onClickNextButton} className="rightButton">
        <Button3>{next}</Button3>
      </button>
    </S.Layout>
  );
}
