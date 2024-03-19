import { Caption1 } from '@/components/UI';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ImageList from '@/components/ImageList';
import { useRouter } from 'next/router';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import Spinner from '@/components/Spinner';

export type MyPageOOTDType = {
  ootdId: number;
  ootdImage: string;
};

export default function ClosetOOTD() {
  const router = useRouter();

  const [myPageOOTDList, setMyPageOOTDList] = useState<MyPageOOTDType[]>([]);

  const onClickImageList = (index: number) => {
    router.push(`/ootd/${index}`);
  };

  const myId = useRecoilValue(userId);

  const { getOOTD } = OOTDApi();

  const [sortStandard, setSortStandard] = useState<'오래된 순' | '최신순'>(
    '최신순'
  );

  const fetchDataFunction = async (ootdPage: number, size: number) => {
    const data = await getOOTD({
      page: ootdPage,
      size,
      userId: myId,
      sortCriteria: 'createdAt',
      sortDirection: sortStandard === '오래된 순' ? 'ASC' : 'DESC',
    });

    return data;
  };

  const {
    data: ootdData,
    isLoading: ootdIsLoading,
    containerRef: ootdRef,
    hasNextPage: ootdHasNextPage,
    reset,
  } = useInfiniteScroll({
    fetchDataFunction,
    size: 20,
    initialData: [],
  });

  useEffect(() => {
    setMyPageOOTDList(
      ootdData.map((item: any) => {
        return { clothId: item.id, clothImage: item.image };
      })
    );
  }, [ootdData]);

  useEffect(() => {
    setMyPageOOTDList([]);
    reset();
  }, [sortStandard]);

  return (
    <S.Layout>
      <S.OOTDSort state={sortStandard === '오래된 순'}>
        <Caption1 onClick={() => setSortStandard('오래된 순')} className="old">
          오래된 순
        </Caption1>
        <S.Divider />
        <Caption1 onClick={() => setSortStandard('최신순')} className="new">
          최신순
        </Caption1>
      </S.OOTDSort>
      <S.OOTDList ref={ootdRef}>
        <ImageList
          type="column"
          data={myPageOOTDList!}
          onClick={onClickImageList}
        />
        {ootdIsLoading && ootdHasNextPage && <Spinner />}
      </S.OOTDList>
    </S.Layout>
  );
}
