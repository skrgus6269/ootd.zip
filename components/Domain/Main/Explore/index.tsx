import { Headline2 } from '@/components/UI';
import S from './style';
import { MainFavoriteCard } from '@/components/Card';
import Carousel from '@/components/Carousel';
import { useEffect, useState } from 'react';
import { MainFavoriteCardProps } from '@/components/Card/MainFavoriteCard';
import { useRouter } from 'next/router';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import {
  FilterData,
  OOTDListType,
} from '../../Search/SearchResult/ClosetCloth';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import SubHead from '../../Search/SearchResult/SubHead';
import ImageList from '@/components/ImageList';
import Spinner from '@/components/Spinner';

export default function Explore() {
  const router = useRouter();

  const onClickImageList = (index: number) => {
    router.push(`/ootd/${index}`);
  };

  const [sortStandard, setSortStandard] = useState<string>('LATEST');
  const [OOTDList, setOOTDList] = useState<OOTDListType[]>([]);

  const { getSearchOOTD } = OOTDApi();

  const fetchOOTDDataFunction = async (ootdPage: number, ootdSize: number) => {
    if (!router.isReady) return;

    const data = await getSearchOOTD({
      searchText: '',
      sortCriteria: sortStandard,
      page: ootdPage,
      size: ootdSize,
    });

    return data;
  };

  const {
    data: OOTDData,
    isLoading: OOTDIsLoading,
    containerRef: OOTDRef,
    hasNextPage: OOTDHasNextPage,
    reset: ootdReset,
  } = useInfiniteScroll({
    fetchDataFunction: fetchOOTDDataFunction,
    size: 9,
    initialData: [],
  });

  useEffect(() => {
    setOOTDList(
      OOTDData.map((item: any) => {
        return {
          id: item.id,
          imageUrl: item.imageUrl,
        };
      })
    );
  }, [OOTDData]);

  useEffectAfterMount(() => {
    setOOTDList([]);
    ootdReset();
  }, [sortStandard]);

  return (
    <>
      <S.SubHead>
        <SubHead
          setState={setSortStandard}
          state={sortStandard}
          count={OOTDList?.length || 0}
        />
      </S.SubHead>
      <S.Layout>
        <S.ClothList ref={OOTDRef}>
          <ImageList
            onClick={onClickImageList}
            data={OOTDList.map((item) => {
              return { ootdId: item.id, ootdImage: item.imageUrl };
            })}
            type={'column'}
          />
          {OOTDIsLoading && OOTDHasNextPage && <Spinner />}
        </S.ClothList>
      </S.Layout>
    </>
  );
}
