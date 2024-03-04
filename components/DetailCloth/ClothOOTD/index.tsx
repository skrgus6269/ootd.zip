import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import Header from '@/components/Header';
import SubHead from '../SubHead';
import ImageList from '@/components/ImageList';
import { useState } from 'react';

interface OOTDDataProps {
  clothId: number;
  clothImage: string;
}

interface ClothOOTDProps {
  count: number;
  data: OOTDDataProps[];
}

export default function ClothOOTD({ count, data }: ClothOOTDProps) {
  const [clicked, setClicked] = useState<'new' | 'old'>('new');
  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead clicked={clicked} setClicked={setClicked} count={count} />
      <S.OOTDLayout>
        <ImageList data={data} type="column" />
      </S.OOTDLayout>
    </S.Layout>
  );
}
