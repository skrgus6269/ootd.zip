import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineContainer,
} from 'react-icons/ai';
import ColorSpan from '@/components/ColorSpan';

interface ClothDiscriptionProps {
  color?: string[];
  size?: string;
  buyDate?: string;
}

export default function DetailClothDetailInfo({
  color,
  size,
  buyDate,
}: ClothDiscriptionProps) {
  return (
    <S.Layout>
      <S.Category>
        <S.InfoTitle>
          <Body3 style={{ fontWeight: '600' }}>색상</Body3>
        </S.InfoTitle>
        {color &&
          color.map((item, index) => {
            return (
              <>
                <ColorSpan
                  key={index}
                  index={index}
                  color={item}
                  name={item}
                  state={false}
                />
              </>
            );
          })}
      </S.Category>

      <S.Category>
        <S.InfoTitle>
          <Body3 style={{ fontWeight: '600' }}>사이즈</Body3>
        </S.InfoTitle>
        <Body3>{size}</Body3>
      </S.Category>

      <S.Category>
        <S.InfoTitle>
          <Body3 style={{ fontWeight: '600' }}>구매시기</Body3>
        </S.InfoTitle>
        <Body3>{buyDate}</Body3>
      </S.Category>
    </S.Layout>
  );
}
