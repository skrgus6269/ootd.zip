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

import BookmarkApi from '@/apis/domain/Bookmark/BookmarkApi';

export interface BookmarkStandardType {
  page: number;
  size: number;
  sortCriteria: string;
  sortDirection: string;
}

export interface BookmarkListType {
  ootdId: number;
  ootdBookmarkId: number;
  ootdImage: string;
}

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

  const toggleVisibility = () => {
    setIsVisible(true);
  };

  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  const onClickYesButton = () => {
    console.log('YES');
  };

  const onClickNoButton = () => {
    //옷 등록 api
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const onClickBackground = () => {
    if (alertOpen) setAlertOpen(false);
  };

  const { getUserBookmarkList } = BookmarkApi();
  const [standard, setStandard] = useState<BookmarkStandardType>({
    page: 0,
    size: 50,
    sortCriteria: 'createdAt',
    sortDirection: 'DESC',
  });

  const [data, setData] = useState();

  const fetchData = async () => {
    if (!router.isReady) return;
    try {
      const result = await getUserBookmarkList(standard);
      setData(result.content);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  // 데이터 패칭
  // const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
  //     [pageParam],
  //     ({ pageParam = 0 }) => getUserBookmarkList({ page: pageParam,
  //                   size: 10,
  //                   sortCriteria: "createdAt",
  //                   sortDirection: "ASC"
  //                 }),
  // );

  const queryClient = useQueryClient();

  console.log(data);

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
        <div>
          <S.ClothList
            onTouchStart={toggleVisibility}
            onTouchEnd={() => setIsVisible(true)}
          >
            <ImageCheckBoxList checkBox={editing} data={data} />
          </S.ClothList>
        </div>
        {isVisible && <S.TopButton onClick={scrollToTop}>버튼</S.TopButton>}
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
