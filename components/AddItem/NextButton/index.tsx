import Button from '@/components/Button';
import S from './style';

interface NextButtonProps {
  state: Boolean;
  onClick: () => void;
}

export default function NextButton({ state, onClick }: NextButtonProps) {
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
          다음단계
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
          다음단계
        </Button>
      )}
    </S.Layout>
  );
}
