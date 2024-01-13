import S from './style';
import { Body4, Caption1 } from '@/components/UI';
import Header from '@/components/Header';

interface SubHeadProps {
  count: number;
  clicked: string;
}

export default function SubHead({ count, clicked }: SubHeadProps) {
  return (
    <S.Layout>
      <S.Frame>
        <Body4 style={{ fontWeight: '500' }}>{count}</Body4>
        <Body4>개의 게시물</Body4>
      </S.Frame>
      <S.Wrap>
        <Caption1 style={{ color: clicked === 'old' ? '#030303' : '#8B8B8B' }}>
          오래된 순
        </Caption1>
        <Caption1 style={{ color: clicked === 'new' ? '#030303' : '#8B8B8B' }}>
          최신 순
        </Caption1>
      </S.Wrap>
    </S.Layout>
  );
}
