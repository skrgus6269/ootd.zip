import S from './style';
import { Body4, Caption1 } from '@/components/UI';
import Image from 'next/image';
import Rectangle from 'public/images/rectangle.png';
import { Dispatch, SetStateAction } from 'react';

interface SubHeadProps {
  count: number;
  state?: string;
  clicked: string;
  setClicked: Dispatch<SetStateAction<string>>;
}

export default function SubHead({
  count,
  state,
  clicked,
  setClicked,
}: SubHeadProps) {
  return (
    <S.Layout state={state}>
      <S.Frame>
        <Body4 state="emphasis">{count}개의 게시물</Body4>
      </S.Frame>
      <S.Wrap clicked={clicked}>
        <Caption1 onClick={() => setClicked('old')} className="old">
          오래된 순
        </Caption1>
        <Image src={Rectangle} alt="구분선" />
        <Caption1 onClick={() => setClicked('new')} className="new">
          최신순
        </Caption1>
      </S.Wrap>
    </S.Layout>
  );
}
