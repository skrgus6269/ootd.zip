import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import { AiOutlineRight } from 'react-icons/ai';

interface ClothInfoProps {
  isPublic: Boolean;
  bigCategory: string;
  smallCategory: string;
  brand: string;
  clothByName: string;
}

export default function DetailClothDiscription({
  isPublic,
  bigCategory,
  smallCategory,
  brand,
  clothByName,
}: ClothInfoProps) {
  return (
    <S.Layout>
      <S.Container>
        <S.Category>
          <Body2>{bigCategory}</Body2>
          {/* <S.StyleListSpan> */}
          {/* <svg><AiOutlineRight /></svg> */}
          {/* </S.StyleListSpan> */}
          <Body2 style={{ fontWeight: '600' }}>{smallCategory}</Body2>
        </S.Category>
        <S.OpenTag state={isPublic}>
          <Body3 style={{ color: isPublic ? '#ff7a00' : '#ff7a00' }}>
            {isPublic ? '공개' : '비공개'}
          </Body3>
        </S.OpenTag>
      </S.Container>

      <Headline1>{brand}</Headline1>
      <Body2>{clothByName}</Body2>
    </S.Layout>
  );
}
