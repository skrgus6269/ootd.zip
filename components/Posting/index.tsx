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
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import TagInformation from '../ClothInformation/TagInformation';
import Carousel from '../Carousel';
import ReportModal from '../Domain/OOTD/ReportModal';
import DeclarationModal from '../DeclarationModal';
import ReceivedDeclarationModal from '../ReceivedDeclaration';
import { OOTDType } from '@/pages/OOTD/[...OOTDNumber]';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import FixModal from '../Domain/OOTD/FixModal';
import Toast from '@/components/Toast';

interface ClothTag {
  xRate: string;
  yRate: string;
  deviceWidth: number;
  deviceHeight: number;
}

interface PostingProps {
  data: OOTDType;
  commentRef: MutableRefObject<any>;
}

export default function Posting({ data, commentRef }: PostingProps) {
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
  const imgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const myId = useRecoilValue(userId);

  //컴포넌트 크기 계산
  useEffect(() => {
    if (imgRef.current) {
      const w = imgRef.current.offsetWidth;
      const h = imgRef.current.offsetHeight;

      setComponentWidth(w);
      setComponentHeight(h);
    }
  }, []);

  const onClickHeartButton = () => {
    setHeartState(!heartState);
  };

  useEffect(() => {
    if (heartState) {
      //좋아요 api 작성
    } else {
      //좋아요 취소 api 작성
    }
  }, [heartState]);

  const onClickCommentButton = () => {
    commentRef.current.focus();
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

  const onClickBookmarkButton = () => {
    setBookMarkState(!bookMarkState);
  };

  useEffect(() => {
    if (bookMarkState) {
      //북마크 등록 api 연동
    } else {
      //북마크 등록 해제 api 연동
    }
  }, [bookMarkState]);

  const onClickTagOpenButton = () => {
    console.log('클릭');
    setClothTagOpen(!clothTagOpen);
  };

  const onClickFollowButton = () => {
    if (followState) {
      //언팔로우 api 연동
      setFollowState(false);
    } else {
      //팔로우 api 연동
      setFollowState(true);
    }
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
  };
  const onClickKebabButton = () => {
    if (myId === data.id) {
      setPublicSetting(false);
      setFixModalIsOpen(true);
      return;
    }
    setReportModalIsOpen(true);
  };

  const [publicSetting, setPublicSetting] = useState<Boolean>(false); // 공개 여부

  return (
    <>
      <S.Background
        onClick={onClickBackground}
        isOpen={reportModalIsOpen || declaration || receivedDeclaration}
      />
      <S.Layout>
        <S.PostingTop>
          <img src={data.userImage} className="userImage" alt="유저 이미지" />
          <Body3 className="userName">{data.userName}</Body3>
          {!followState ? (
            <Button3 onClick={onClickFollowButton} className="follow">
              팔로우
            </Button3>
          ) : (
            <Button3 onClick={onClickFollowButton}>팔로우</Button3>
          )}
          <AiOutlineEllipsis onClick={onClickKebabButton} />
        </S.PostingTop>
        <S.PostingImage ref={imgRef}>
          <AiFillTag onClick={onClickTagOpenButton} className="tag" />
          <Carousel infinite={false} slidesToShow={1}>
            {data.ootdImages.map((item, index) => {
              return (
                <S.ImageWithTag key={index}>
                  <img
                    src={item.url}
                    className="postingImage"
                    alt="포스팅 이미지"
                  />
                  {item.ootdClothesList?.map((items, index) => {
                    return (
                      <S.PostingClothTag
                        key={index}
                        clothTagOpen={clothTagOpen}
                        xrate={String(
                          Number(items.coordinate.xrate) -
                            Number(
                              items.deviceSize.deviceWidth - componentWidth
                            )
                        )}
                        yrate={String(
                          Number(items.coordinate.yrate) -
                            Number(
                              items.deviceSize.deviceHeight - componentHeight
                            )
                        )}
                      >
                        <TagInformation
                          clothId={items.id}
                          clothImage={items.url}
                          caption={'tag'}
                          headline={items.brand}
                          bodyFirst={items.name}
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
            onClick={onClickCommentButton}
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
          {data.styles.map((item, index) => {
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
        />
        {declaration && (
          <DeclarationModal
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
