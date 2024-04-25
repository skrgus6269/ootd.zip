import { Body3, Headline2 } from '@/components/UI';
import S from './style';

export default function EmptyFilteredResult() {
  return (
    <S.Layout>
      <Headline2>필터링된 결과가 없습니다.</Headline2>
      <Body3 className="sub">다른 필터를 적용해보세요.</Body3>
    </S.Layout>
  );
}
