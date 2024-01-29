import { Body3, Caption1 } from '@/components/UI';
import S from './style';

interface ClosetTabbarProps {
  OOTDNumber: number;
  clothNumber: number;
  handleStep: (next: string) => void;
  currentStep: string;
}

export default function ClosetTabbar({
  OOTDNumber,
  clothNumber,
  handleStep,
  currentStep,
}: ClosetTabbarProps) {
  return (
    <S.Layout>
      <S.OOTD onClick={() => handleStep('OOTD')}>
        <Body3 state="emphasis">{OOTDNumber}</Body3>
        <Caption1>OOTD</Caption1>
        {currentStep === 'OOTD' && <S.Hr />}
      </S.OOTD>
      <S.Closet onClick={() => handleStep('Cloth')}>
        <Body3 state="emphasis">{clothNumber}</Body3>
        <Caption1>옷</Caption1>
        {currentStep === 'Cloth' && <S.Hr />}
      </S.Closet>
    </S.Layout>
  );
}
