import { Caption1 } from '@/components/UI';
import S from './style';
import Divider from '@/public/images/Divider.svg';
import { useEffect, useState } from 'react';
import ImageList from '@/components/ImageList';
import { useRouter } from 'next/router';

export type MyPageOOTDType = {
  ootdId: number;
  ootdImage: string;
};

interface ClosetOOTDProps {
  myPageOOTDList?: MyPageOOTDType[];
}

export default function ClosetOOTD({ myPageOOTDList }: ClosetOOTDProps) {
  const [sortStandard, setSortStandard] = useState<'오래된 순' | '최신순'>(
    '오래된 순'
  );

  const [myPageOOTD, setMyPageOOTD] = useState<MyPageOOTDType[] | undefined>(
    myPageOOTDList
  );

  const router = useRouter();

  const onClickImageList = (index: number) => {
    router.push(`/OOTD/${index}`);
  };

  useEffect(() => {
    // 이미지 리스트 재정렬 코드
  }, [sortStandard]);

  return (
    <S.Layout>
      <S.OOTDSort state={sortStandard === '오래된 순'}>
        <Caption1 onClick={() => setSortStandard('오래된 순')} className="old">
          오래된 순
        </Caption1>
        <Divider />
        <Caption1 onClick={() => setSortStandard('최신순')} className="new">
          최신순
        </Caption1>
      </S.OOTDSort>
      <S.OOTDList>
        {myPageOOTD && (
          <ImageList
            type="column"
            data={myPageOOTD}
            onClick={onClickImageList}
          />
        )}
      </S.OOTDList>
    </S.Layout>
  );
}
