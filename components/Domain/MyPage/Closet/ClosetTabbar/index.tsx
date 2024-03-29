import { Body3, Caption1 } from '@/components/UI';
import S from './style';

interface ClosetTabbarProps {
  ootdCount: number;
  clothesCount: number;
  handleStep: (next: string) => void;
  currentStep: string;
}

export default function ClosetTabbar({
  ootdCount,
  clothesCount,
  handleStep,
  currentStep,
}: ClosetTabbarProps) {
  return (
    <S.Layout>
      <S.OOTD onClick={() => handleStep('OOTD')}>
        <Body3 state="emphasis">{ootdCount}</Body3>
        <Caption1>OOTD</Caption1>
        {currentStep === 'OOTD' && <S.Hr />}
      </S.OOTD>
      <S.Closet onClick={() => handleStep('Cloth')}>
        <Body3 state="emphasis">{clothesCount}</Body3>
        <Caption1>옷</Caption1>
        {currentStep === 'Cloth' && <S.Hr />}
      </S.Closet>
    </S.Layout>
  );
}
