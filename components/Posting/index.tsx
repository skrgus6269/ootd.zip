/* eslint-disable @next/next/no-img-element */
import {
  AiFillHeart,
  AiFillTag,
  AiOutlineEllipsis,
  AiOutlineHeart,
} from 'react-icons/ai';
import { Body2, Body3, Body4, Button3 } from '../UI';
import S from './style';
import BookmarkOutlined from '@/public/images/BookmarkOutlined.svg';
import BookmarkFilled from '@/public/images/BookmarkFilled.svg';
import ShareOutlined from '@/public/images/shareOutlined.svg';
import MessageOutlined from '@/public/images/MessageOutlined.svg';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import TagInformation from '../ClothInformation/TagInformation';
import Carousel from '../Carousel';
import ReportModal from '../Domain/OOTD/ReportModal';
import DeclarationModal from '../DeclarationModal';
import ReceivedDeclarationModal from '../ReceivedDeclaration';
import { OOTDType } from '@/pages/OOTD/[...OOTDNumber]';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import FixModal from '../Domain/OOTD/FixModal';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import { useRouter } from 'next/router';
import { PublicApi } from '@/apis/domain/Public/PublicApi';
import Avatar from '@/public/images/Avatar.svg';
import Toast from '../Toast';

interface PostingProps {
  data: OOTDType;
  commentRef: MutableRefObject<any>;
  myPost: Boolean;
  setGetPostReRender: Dispatch<SetStateAction<number>>;
  getPostReRender: number;
}

export default function Posting({
  data,
  commentRef,
  myPost,
  getPostReRender,
  setGetPostReRender,
}: PostingProps) {
  const [followState, setFollowState] = useState<Boolean>(false);
  const [heartState, setHeartState] = useState<Boolean>(false);
  const [bookMarkState, setBookMarkState] = useState<Boolean>(false);
  const [componentWidth, setComponentWidth] = useState(0); //컴포넌트 길이
  const [componentHeight, setComponentHeight] = useState(0); //컴포넌트 높이
  const [clothTagOpen, setClothTagOpen] = useState<Boolean>(true);
  const [reportModalIsOpen, setReportModalIsOpen] = useState<Boolean>(false);
  const [declaration, setDeclaration] = useState<Boolean>(false);
  const [receivedDeclaration, setReceivedDeclaration] =
    useState<Boolean>(false);
  const [fixModalIsOpen, setFixModalIsOpen] = useState<Boolean>(false);
  const [publicSetting, setPublicSetting] = useState<Boolean>(false);

  const imgRef = useRef<HTMLDivElement>(null);
  const myId = useRecoilValue(userId);
  const { postOOTDLike, deleteOOTDLike, postOOTDBookmark, deleteOOTDBookmark } =
    OOTDApi();
  const { follow, unFollow } = PublicApi();
  const router = useRouter();

  useEffect(() => {
    setHeartState(data.isLike);
    setBookMarkState(data.isBookmark);
    setFollowState(data.isFollowing);
  }, [data]);

  //컴포넌트 크기 계산
  useEffect(() => {
    if (imgRef.current) {
      const w = imgRef.current.offsetWidth;
      const h = imgRef.current.offsetHeight;

      setComponentHeight(h);
      setComponentWidth(w);
    }
  }, [data]);

  const onClickHeartButton = async () => {
    if (!heartState) await postOOTDLike(Number(router.query.OOTDNumber![0]));
    if (heartState) await deleteOOTDLike(Number(router.query.OOTDNumber![0]));
    setHeartState(!heartState);
  };

  const onClickShareButton = () => {
    //웹에서는 정상 작동하나 웹뷰에서는 작동하지 않음
    //xcode를 활용해서 해결해야할 것 같아 이후에 처리 예정
    //참고 블로그 https://velog.io/@igun0423/expo-react-native-webview%EC%97%90%EC%84%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EC%99%B8%EB%B6%80-%EC%95%B1-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
    // const url = 'https://www.google.co.kr';
    // if (window.Kakao) {
    //   const kakao = window.Kakao;
    //   if (!kakao.isInitialized()) {
    //     kakao.init(NEXT_PUBLIC_KAKAO_JS_KEY);
    //   }
    //   kakao.Share.sendDefault({
    //     objectType: 'feed',
    //     content: {
    //       title: '어버이날 모의고사',
    //       description: '부모님 얼마나 알고계신가요?',
    //       imageUrl: '',
    //       link: {
    //         mobileWebUrl: url,
    //         webUrl: url,
    //       },
    //     },
    //     buttons: [
    //       {
    //         title: '채점하러 가기',
    //         link: {
    //           mobileWebUrl: url,
    //           webUrl: url,
    //         },
    //       },
    //     ],
    //   });
    // }
  };

  const onClickBookmarkButton = async () => {
    if (!bookMarkState)
      await postOOTDBookmark(Number(router.query.OOTDNumber![0]));
    if (bookMarkState)
      await deleteOOTDBookmark(Number(router.query.OOTDNumber![0]));
    setBookMarkState(!bookMarkState);
  };

  const onClickFollowButton = async () => {
    setFollowState(!followState);
    if (!followState) await follow(data.userId);
    if (followState) await unFollow(data.userId);
  };

  const onClickBackground = () => {
    if (reportModalIsOpen) {
      setReportModalIsOpen(false);
    }
    if (declaration) {
      setDeclaration(false);
    }
    if (receivedDeclaration) {
      setReceivedDeclaration(false);
    }
    if (reportModalIsOpen) {
      setReportModalIsOpen(false);
    }
    if (fixModalIsOpen) {
      setFixModalIsOpen(false);
    }
  };

  const onClickKebabButton = () => {
    if (myId === data.userId) {
      setFixModalIsOpen(true);
      return;
    }
    setReportModalIsOpen(true);
  };

  return (
    <>
      <S.Background
        onClick={onClickBackground}
        isOpen={
          reportModalIsOpen ||
          declaration ||
          receivedDeclaration ||
          reportModalIsOpen ||
          fixModalIsOpen
        }
      />
      <S.Layout>
        <S.PostingTop>
          {data.userName === 'string' ? (
            <img src={data.userImage} className="userImage" alt="유저 이미지" />
          ) : (
            <Avatar className="avatar" />
          )}

          <Body3 className="userName">{data.userName}</Body3>
          {!myPost && !followState && (
            <Button3 onClick={onClickFollowButton} className="unfollow">
              팔로우
            </Button3>
          )}
          {!myPost && followState && (
            <Button3 className="following" onClick={onClickFollowButton}>
              팔로잉
            </Button3>
          )}
          <AiOutlineEllipsis onClick={onClickKebabButton} />
        </S.PostingTop>
        <S.PostingImage ref={imgRef}>
          <AiFillTag
            onClick={() => setClothTagOpen(!clothTagOpen)}
            className="tag"
          />
          <Carousel infinite={false} slidesToShow={1}>
            {data.ootdImages?.map((item, index) => {
              return (
                <S.ImageWithTag key={index}>
                  <img
                    src={item.ootdImage}
                    className="postingImage"
                    alt="포스팅 이미지"
                  />
                  {item.ootdImageClothesList &&
                    item.ootdImageClothesList.map((items, index) => {
                      return (
                        <S.PostingClothTag
                          key={index}
                          clothTagOpen={clothTagOpen}
                          xrate={String(
                            Number(items.coordinate?.xrate) -
                              Number(
                                items.deviceSize?.deviceWidth - componentWidth
                              )
                          )}
                          yrate={String(
                            Number(items.coordinate?.yrate) -
                              Number(
                                items.deviceSize?.deviceHeight - componentHeight
                              )
                          )}
                        >
                          <TagInformation
                            clothId={items.clothesId}
                            clothImage={items.clothesImage}
                            caption={'tag'}
                            brand={items.brand.name}
                            name={items.clothesName}
                            size="small"
                            type="view"
                          />
                        </S.PostingClothTag>
                      );
                    })}
                </S.ImageWithTag>
              );
            })}
          </Carousel>
        </S.PostingImage>
        <S.PostingCommunication>
          {heartState ? (
            <AiFillHeart onClick={onClickHeartButton} className="likedHeart" />
          ) : (
            <AiOutlineHeart
              onClick={onClickHeartButton}
              className="unLikedHeart"
            />
          )}
          <MessageOutlined
            className="comment"
            onClick={() => commentRef.current.focus()}
            alt="댓글"
          />
          <ShareOutlined
            className="share"
            onClick={onClickShareButton}
            alt="공유하기"
          />
          {bookMarkState ? (
            <BookmarkFilled
              className="bookmark"
              onClick={onClickBookmarkButton}
              alt="북마크"
            />
          ) : (
            <BookmarkOutlined
              className="bookmark"
              onClick={onClickBookmarkButton}
              alt="북마크"
            />
          )}
        </S.PostingCommunication>
        <S.PostingExplanation>
          <Body2 className="description">{data.contents}</Body2>
          <Body4 className="date">{data.createAt}</Body4>
        </S.PostingExplanation>
        <S.PostingStyleTag>
          <Body3 className="styletag">스타일태그</Body3>
          {data.styles &&
            data.styles.map((item, index) => {
              return (
                <S.PostingStyleTagSpan key={index}>
                  <Button3>{item.name}</Button3>
                </S.PostingStyleTagSpan>
              );
            })}
        </S.PostingStyleTag>
        <ReportModal
          reportModalIsOpen={reportModalIsOpen}
          setReportModalIsOpen={setReportModalIsOpen}
          setDeclaration={setDeclaration}
        />
        <FixModal
          setPublicSetting={setPublicSetting}
          reportModalIsOpen={fixModalIsOpen}
          setReportModalIsOpen={setFixModalIsOpen}
          isPrivate={data.isPrivate}
          setGetPostReRender={setGetPostReRender}
          getPostReRender={getPostReRender}
        />
        {declaration && (
          <DeclarationModal
            pageNumber={Number(router.query.OOTDNumber![0])}
            declaration={declaration}
            setDeclaration={setDeclaration}
            setReceivedDeclaration={setReceivedDeclaration}
          />
        )}
        {receivedDeclaration && (
          <ReceivedDeclarationModal
            receivedDeclaration={receivedDeclaration}
            setReceivedDeclaration={setReceivedDeclaration}
          />
        )}
        {publicSetting && (
          <Toast text="다른 사람이 이 ootd를 볼 수 있도록 변경되었습니다." />
        )}
      </S.Layout>
    </>
  );
}
