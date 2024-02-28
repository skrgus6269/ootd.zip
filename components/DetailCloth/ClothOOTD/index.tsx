import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import Header from '@/components/Header';
import SubHead from '../SubHead';
import ImageList from '@/components/ImageList';
import { useEffect, useState } from 'react';

interface OOTDDataProps {
  clothId: number;
  clothImage: string;
}

interface ClothOOTDProps {
  count: number;
  data: OOTDDataProps[];
}

export default function ClothOOTD({ count, data }: ClothOOTDProps) {
  const [clicked, setClicked] = useState<string>('오래된 순');

  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead count={count} state={clicked} setState={setClicked} />
      <S.OOTDLayout>
        <ImageList data={data} type="column" />
      </S.OOTDLayout>
    </S.Layout>
  );
}
