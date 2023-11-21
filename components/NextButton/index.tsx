import Button from '@/components/Button';
import S from './style';

interface NextButtonProps {
  state: Boolean;
  onClick: () => void;
  children: string;
}

export default function NextButton({
  state,
  onClick,
  children,
}: NextButtonProps) {
  return (
    <S.Layout>
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
