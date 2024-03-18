import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import ClosetTabbar from './ClosetTabbar';
import ClosetCloth from './ClosetCloth';
import ClosetOOTD, { MyPageOOTDType } from './ClosetOOTD';
import { useEffect, useState } from 'react';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';

interface ClosetType {
  localUserId: number;
  showingId: number;
}

export default function Closet({ localUserId, showingId }: ClosetType) {
  const [Funnel, currentStep, handleStep] = useFunnel(['OOTD', 'Cloth']);

  return (
    <>
      <S.Layout>
        <ClosetTabbar
          OOTDNumber={2}
          clothNumber={2}
          handleStep={handleStep}
          currentStep={currentStep}
        />
        <Funnel>
          <Funnel.Steps name="OOTD">
            <ClosetOOTD />
          </Funnel.Steps>
          <Funnel.Steps name="Cloth">
            <ClosetCloth showingId={showingId} />
          </Funnel.Steps>
        </Funnel>
      </S.Layout>
    </>
  );
}
