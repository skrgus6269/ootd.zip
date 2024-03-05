import { Title1, Caption2, Caption1, Button3 } from '@/components/UI';
import S from './style';
import { useEffect, useState } from 'react';
import FollowBlock from '@/components/FollowBlock';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';

export default function Recents() {
  const router = useRouter();

  const ment = [
    '우리프론트안녕안녕안녕안연 최고',
    'Haezooseyo',
    '나이키',
    '나이키',
    '나이키',
    '블루',
  ];

  return (
    <>
      {ment.length > 0 && (
        <S.Layout>
          <S.Menu>
            <Title1>최근 검색어</Title1>
            <S.CaptionText>
              <Caption1>모두 지우기</Caption1>
            </S.CaptionText>
          </S.Menu>

          <S.Keywords>
            {ment.map((item, index) => {
              return (
                <S.Chip key={index}>
                  <Button3 className="tagName" state="emphasis">
                    {item}
                  </Button3>
                  <AiOutlineClose className="close" />
                </S.Chip>
              );
            })}
          </S.Keywords>
        </S.Layout>
      )}
    </>
  );
}
