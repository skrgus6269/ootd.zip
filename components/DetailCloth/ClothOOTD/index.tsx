import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import Header from '@/components/Header';
import SubHead from '../SubHead';
import ImageLayout from '@/components/ImageLayout';

interface ClothOOTDProps {
  count: number;
  imagePaths: string[];
}

export default function ClothOOTD({ count, imagePaths }: ClothOOTDProps) {
  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead count={count} clicked="new" />
      <ImageLayout imagePaths={imagePaths} />
    </S.Layout>
  );
}
