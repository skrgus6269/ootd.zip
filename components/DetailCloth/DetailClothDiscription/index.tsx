import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineContainer,
  AiOutlineLink,
} from 'react-icons/ai';

interface ClothDiscriptionProps {
  isLink: Boolean;
  purchasing: string;
  uploadDate?: string;
  memo?: string;
}

import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';

export default function DetailClothDiscription({
  isLink,
  purchasing,
  uploadDate,
  memo,
}: ClothDiscriptionProps) {
  const clickedLink = (linkItem: string) => {
    // window.open(`${linkItem}`);
    sendReactNativeMessage({ type: 'clickedPurchaseLink', payload: linkItem });
  };
  return (
    <S.Layout>
      <S.Category>
        <S.IconSpan>
          {isLink ? (
            <AiOutlineLink className="isLink" />
          ) : (
            <AiOutlineShopping />
          )}
        </S.IconSpan>
        {isLink ? (
          <Body3
            state="underline"
            className="isLink"
            onClick={() => clickedLink(purchasing)}
          >
            {purchasing}
          </Body3>
        ) : (
          <Body3>{purchasing}</Body3>
        )}
      </S.Category>

      <S.Category>
        <S.IconSpan>
          <AiOutlineCalendar />
        </S.IconSpan>
        <Body3>{uploadDate}</Body3>
      </S.Category>

      {memo && (
        <S.Category>
          <S.IconSpan>
            <AiOutlineContainer />
          </S.IconSpan>
          <Body3>{memo}</Body3>
        </S.Category>
      )}
    </S.Layout>
  );
}
