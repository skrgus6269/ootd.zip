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
import Toast from '@/components/Toast';

export type OOTDdataType = {
  ootdId: number;
  ootdBookmarkId: number;
  ootdImage: string;
};

export type BookmarkListType = {
  content: OOTDdataType[];
  page: number;
  size: number;
  isLast: Boolean;
};

export default function Bookmark() {
  const router = useRouter();

  const [editing, setEditing] = useState<Boolean>(false);
  const [showButton, setShowButton] = useState<Boolean>(false);

  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [toastOpen, setToastOpen] = useState<Boolean>(false);

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

  const onClickNoButton = async () => {
    console.log(checkedItems);
    const result = await deleteOOTDBookmark(checkedItems);
    if (result.statusCode === 200) {
      // 북마크 재정렬 코드 필요
      setAlertOpen(false);
      setToastOpen(true);
      setEditing(false);
      scrollToTop();
    }
  };

  const onClickBackground = () => {
    if (alertOpen) setAlertOpen(false);
  };

  const { getUserBookmarkList, deleteOOTDBookmark } = BookmarkApi();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserBookmarkList({
        page: 1,
        size: 10,
        sortCriteria: 'createdAt',
        sortDirection: 'DESC',
      });
      setData(result);
    };

    fetchData();
  }, []);

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
        <S.ClothList>
          <ImageCheckBoxList
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            checkBox={editing}
            data={data}
          />
        </S.ClothList>
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
        {toastOpen && <Toast text="북마크에서 삭제되었습니다." />}
      </S.Layout>
    </>
  );
}
