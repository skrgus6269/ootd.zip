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
  data: OOTDDataProps[];
}

export default function ClothOOTD({ data }: ClothOOTDProps) {
  const [clicked, setClicked] = useState<string>('new');
  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead state={clicked} setState={setClicked} count={data.length} />
      <S.OOTDLayout>
        <ImageList data={data} type="column" />
      </S.OOTDLayout>
    </S.Layout>
  );
}
