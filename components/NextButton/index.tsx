import Button from '@/components/Button';
import S from './style';

interface NextButtonProps {
  state: Boolean;
  onClick: () => void;
  children: string;
  className?: string;
}

export default function NextButton({
  state,
  onClick,
  children,
  className,
}: NextButtonProps) {
  return (
    <S.Layout className={className}>
      {state === true && (
        <Button
          size="big"
          backgroundColor="grey_00"
          color="grey_100"
          border={false}
          onClick={onClick}
        >
          {children}
        </Button>
      )}
      {state === false && (
        <Button
          size="big"
          backgroundColor="grey_90"
          color="grey_100"
          border={false}
          onClick={() => {}}
        >
          {children}
        </Button>
      )}
    </S.Layout>
  );
}
