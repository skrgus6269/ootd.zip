import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineContainer,
} from 'react-icons/ai';
import ColorSpan from '@/components/ColorSpan';

interface colorProps {
  color: string;
  name: string;
}

interface ClothDiscriptionProps {
  color?: colorProps[];
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
      <S.CategoryStart>
        <S.InfoTitle>
          <Body3 style={{ fontWeight: '600' }}>색상</Body3>
        </S.InfoTitle>
        <S.ColorList>
          {color &&
            color.map((item, index) => {
              return (
                <>
                  {/* <ColorSpan
                    key={index}
                    path="detailCloth"
                    name={item.name}
                    index={index}
                    color={item.color}
                    state={false}
                  /> */}
                  <S.ColorSpanLayout key={index}>
                    <S.ColorSpan bgColor={item.color} />
                    <Body3>{item.name}</Body3>
                  </S.ColorSpanLayout>
                </>
              );
            })}
        </S.ColorList>
      </S.CategoryStart>

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
