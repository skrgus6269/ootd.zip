import { Body4, Button3, Caption1, Headline2, Title1 } from '@/components/UI';
import S from '@/style/bookmark/style';
import AppBar from '@/components/Appbar';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Rectangle from 'public/images/rectangle.png';
import { useEffect, useRef, useState } from 'react';
import BookmarSubHead from '@/components/Domain/Bookmark/BookmarkSubHead';
import ImageCheckBoxList from '@/components/ImageCheckBoxList';
import BookmarkAlert from '@/components/Domain/Bookmark/BookmarkAlert';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';

import BookmarkApi from '@/apis/domain/Bookmark/BookmarkApi';

import BackTop from '@/public/images/BackTop.svg';

export type OOTDdataType = {
  ootdId: number;
  ootdBookmarkId: number;
  ootdImage: string;
};

export type BookmarkListType = {
  content: OOTDdataType[];
  page: number;
  size: number;
  sortCriteria: string;
  sortDirection: string;
};

export default function Bookmark() {
  const router = useRouter();

  const [editing, setEditing] = useState<Boolean>(false);
  const [showButton, setShowButton] = useState<Boolean>(false);

  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsVisible(scrollTop > 10);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  const onClickYesButton = () => {
    setAlertOpen(false);
  };

  const onClickNoButton = () => {
    console.log(checkedItems);
  };

  const onClickBackground = () => {
    if (alertOpen) setAlertOpen(false);
  };

  const { getUserBookmarkList } = BookmarkApi();

  const getData = async ({
    content,
    page,
    size,
    sortCriteria,
    sortDirection,
  }: BookmarkListType) => {
    try {
      const result = await getUserBookmarkList({
        page: page,
        size: size,
        sortCriteria: sortCriteria,
        sortDirection: sortDirection,
      });
      return result;
    } catch (error) {
      console.error('Error in getFeedPost:', error);
      throw error;
    }
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      ['datas'],
      ({ pageParam = 0 }) =>
        getData({
          content: [],
          page: pageParam,
          size: 10,
          sortCriteria: 'createdAt',
          sortDirection: 'DESC',
        }),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.last) {
            return;
          } else {
            return lastPage.page + 1;
          }
        },
      }
    );

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={onClickBackground} />
      <S.Layout>
        <AppBar
          leftProps={<AiOutlineClose onClick={() => router.back()} />}
          middleProps={<Title1>북마크</Title1>}
          rightProps={<></>}
        />

        <BookmarSubHead
          editing={editing}
          setEditing={setEditing}
          setAlertOpen={setAlertOpen}
        />
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <S.ClothList>
            <ImageCheckBoxList
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              checkBox={editing}
              data={data}
            />
          </S.ClothList>
        </InfiniteScroll>
        {isVisible && (
          <S.TopButton>
            <BackTop onClick={scrollToTop}>버튼</BackTop>
          </S.TopButton>
        )}
        {alertOpen && (
          <BookmarkAlert
            onClickYesButton={onClickYesButton}
            onClickNoButton={onClickNoButton}
          />
        )}
      </S.Layout>
    </>
  );
}
