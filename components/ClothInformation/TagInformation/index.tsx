import { Body4, Headline4 } from '@/components/UI';
import S from './style';
import Image from 'next/image';
import { ClothInformationProps } from '../type';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function TagInformation({
  itemImage,
  Headline,
  BodyFirst,
  BodySecond,
  state,
}: ClothInformationProps) {
  return (
    <S.Layout state={state!}>
      <S.ItemImage>
        <Image width={32} height={32} src={itemImage} alt="아이템" />
      </S.ItemImage>
      <S.Information>
        <Headline4>{Headline}</Headline4>
        <Body4>{BodyFirst}</Body4>
        {BodySecond && <Body4>{BodySecond}</Body4>}
      </S.Information>
      <S.Close state={state!}>
        <div>
          <AiFillCloseCircle />
        </div>
      </S.Close>
    </S.Layout>
  );
}
