import S from './style';
import { Body4, Caption1 } from '@/components/UI';
import Image from 'next/image';
import Rectangle from 'public/images/rectangle.png';
import { Dispatch, SetStateAction, useState } from 'react';

interface SubHeadProps {
  count: number;
  style?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export default function SubHead({
  count,
  style,
  state,
  setState,
}: SubHeadProps) {
  return (
    <S.Layout state={style}>
      <S.Frame>
        <Body4 style={{ fontWeight: '500', color: '#BBBBBB' }}>{count}</Body4>
        <Body4 style={{ color: '#BBBBBB' }}>개의 게시물</Body4>
      </S.Frame>
      <S.Wrap>
        <Caption1
          style={{ color: state === '오래된 순' ? '#030303' : '#8B8B8B' }}
          onClick={() => setState('오래된 순')}
        >
          오래된 순
        </Caption1>
        <Image src={Rectangle} alt="Rectangle" />
        <Caption1
          style={{ color: state === '최신 순' ? '#030303' : '#8B8B8B' }}
          onClick={() => setState('최신 순')}
        >
          최신순
        </Caption1>
      </S.Wrap>
    </S.Layout>
  );
}
