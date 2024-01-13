import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import Header from '@/components/Header';
import SubHead from '../SubHead';
import Gallery from '@/components/Gallery/';

interface ClothOOTDProps {
  count: number;
}

export default function ClothOOTD({ count }: ClothOOTDProps) {
  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead count={count} clicked="new" />
      {/* <Gallery>

        </Gallery> */}
    </S.Layout>
  );
}
