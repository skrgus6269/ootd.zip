import { Body4, Headline4 } from '@/components/UI';
import S from './style';
import Image from 'next/image';
import { ClothInformationProps } from '../type';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function TagInformation({
  clothImage,
  headline,
  bodyFirst,
  bodySecond,
  state,
  className,
  type,
}: ClothInformationProps) {
  return (
    <S.Layout className={className} state={state!}>
      <S.ItemImage>
        <Image width={32} height={32} src={clothImage} alt="아이템" />
      </S.ItemImage>
      <S.Information>
        <Headline4>{headline}</Headline4>
        <Body4>{bodyFirst}</Body4>
        {bodySecond && <Body4>{bodySecond}</Body4>}
      </S.Information>
      <S.Close state={state!}>
        {type !== 'view' && (
          <div>
            <AiFillCloseCircle />
          </div>
        )}
      </S.Close>
    </S.Layout>
  );
}
