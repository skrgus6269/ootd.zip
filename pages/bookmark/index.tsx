import { Title1 } from '@/components/UI';
import S from '@/pageStyle/bookmark/style';
import AppBar from '@/components/Appbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import BookmarSubHead from '@/components/Domain/Bookmark/BookmarkSubHead';
import ImageCheckBoxList from '@/components/ImageCheckBoxList';
import BookmarkAlert from '@/components/Domain/Bookmark/BookmarkAlert';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import BookmarkApi from '@/apis/domain/Bookmark/BookmarkApi';
import BackTop from '@/public/images/BackTop.svg';
import Toast from '@/components/Toast';
import Spinner from '@/components/Spinner';

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

  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [toastOpen, setToastOpen] = useState<Boolean>(false);

  const scrollToTop = () => {
    const container = bookmarkRef.current;
    container.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const container = bookmarkRef.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = container;
      console.log(scrollTop, clientHeight, scrollHeight);
      if (scrollTop >= 50) {
        setIsVisible(true);
      }
      if (scrollTop < 50) {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    container.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  const onClickYesButton = () => {
    setAlertOpen(false);
  };

  const onClickNoButton = async () => {
    const result = await deleteBookmarkList(checkedItems);
    if (result) {
      setAlertOpen(false);
      setToastOpen(true);
      setEditing(false);
      scrollToTop();
    }
  };

  // 편집 초기화 시 체크 박스 클릭한 값들 초기화
  useEffect(() => {
    setCheckedItems([]);
  }, [editing]);

  const onClickBackground = () => {
    if (alertOpen) setAlertOpen(false);
  };

  const { getUserBookmarkList, deleteBookmarkList } = BookmarkApi();
  const [bookmarkList, setBookmarkList] = useState<OOTDdataType[]>([]);

  const fetchDataFunction = async (bookmarkPage: number, size: number) => {
    if (!router.isReady) return;

    const data = await getUserBookmarkList({
      page: bookmarkPage,
      size,
      sortCriteria: 'createdAt',
      sortDirection: 'ASC',
    });

    return data;
  };

  const {
    data: bookmarkData,
    isLoading: bookmarkIsLoading,
    containerRef: bookmarkRef,
    hasNextPage: bookmarkHasNextPage,
    reset,
  } = useInfiniteScroll({
    fetchDataFunction,
    size: 7,
    initialData: [],
  });

  useEffect(() => {
    setBookmarkList(
      bookmarkData.map((item: any) => {
        return {
          ootdId: item.ootdId,
          ootdBookmarkId: item.ootdBookmarkId,
          ootdImage: item.ootdImage,
        };
      })
    );
  }, [bookmarkData]);

  useEffect(() => {
    setBookmarkList([]);
    reset();
  }, [toastOpen]);

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={onClickBackground} />
      <S.Layout>
        <AppBar
          leftProps={<AiOutlineArrowLeft onClick={() => router.back()} />}
          middleProps={<Title1>북마크</Title1>}
          rightProps={<></>}
        />

        <S.BookmarkList ref={bookmarkRef}>
          <BookmarSubHead
            editing={editing}
            setEditing={setEditing}
            setAlertOpen={setAlertOpen}
          />
          <ImageCheckBoxList
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            checkBox={editing}
            data={bookmarkList!}
          />
          {bookmarkIsLoading && bookmarkHasNextPage && <Spinner />}
          {isVisible && (
            <S.TopButton>
              <BackTop onClick={scrollToTop}>버튼</BackTop>
            </S.TopButton>
          )}
        </S.BookmarkList>

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
