import S from '@/style/OOTD/style';
import Posting from '@/components/Posting';
import PostingComment from '@/components/PostingComment';
import PostingCommentWrite from '@/components/PostingComment/PostingCommentWrite';
import { useRef, useState } from 'react';
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import UserCloth from '@/components/Domain/OOTD/UserCloth';
import UserOOTD from '@/components/Domain/OOTD/UserOOTD';
import SimilarOOTD from '@/components/Domain/OOTD/SimilarOOTD';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import Toast from '@/components/Toast';

export interface CommentStateType {
  ootdId: number;
  taggedUserName: string;
  parentDepth: number;
  content: string;
}

export interface OOTDType {
  id: number;
  contents: string; //본문
  viewCount: number; //조회수
  reportCount: number; //신고 횟수
  likeCount: number; //좋아요 개수
  userName: string; //유저명
  userImage: string; //유저 프로필 이미지
  createAt: string; //작성일
  ootdImages: {
    url: string; //ootd 이미지
    ootdClothesList?: {
      id: number;
      url: string;
      brand: string; //옷 브랜드
      category: {
        id: number;
        smallCategory: string;
        bigCategory: string;
      };
      size: string;
      name: string; //옷 별칭
      coordinate: {
        xrate: string;
        yrate: string;
      };
      deviceSize: {
        deviceWidth: number;
        deviceHeight: number;
      };
    }[];
  }[];
  styles: {
    name: string;
  }[];
  comment?: {
    id: number;
    userName: string;
    userImage: string;
    content: string;
    createAt: string;
    childComment?: {
      id: number;
      userName: string;
      userImage: string;
      content: string;
      createAt: string;
      taggedUserName: string;
    }[];
  }[];
  bookmark: Boolean;
  like: Boolean;
}

const OOTD: ComponentWithLayout = () => {
  const [, getOOtd] = OOTDApi();

  const [sampleData, setSampleData] = useState<OOTDType>({
    id: 1,
    contents:
      'Lorem ipsum dolor sit amet consectetur. Egestas diam ac fringilla diam morbi amet praesent nullam.',
    viewCount: 0,
    reportCount: 0,
    likeCount: 0,
    userName: '낙낙',
    userImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    createAt: '2024.01.03',
    ootdImages: [
      {
        url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        ootdClothesList: [
          {
            id: 0,
            url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            brand: 'Adidas',
            name: '스트릿 저지',
            category: {
              id: 0,
              smallCategory: '저지',
              bigCategory: '아우터',
            },
            size: 'Free',
            coordinate: {
              xrate: '20',
              yrate: '20',
            },
            deviceSize: {
              deviceWidth: 390,
              deviceHeight: 390,
            },
          },
          {
            id: 0,
            url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            brand: 'Nike',
            name: '에어포스',
            category: {
              id: 0,
              smallCategory: 'string',
              bigCategory: 'string',
            },
            size: 'string',
            coordinate: {
              xrate: '244',
              yrate: '342',
            },
            deviceSize: {
              deviceWidth: 390,
              deviceHeight: 390,
            },
          },
        ],
      },
      {
        url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        ootdClothesList: [
          {
            id: 0,
            url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            brand: 'string',
            name: 'string',
            category: {
              id: 0,
              smallCategory: 'string',
              bigCategory: 'string',
            },
            size: 'string',
            coordinate: {
              xrate: '20',
              yrate: '20',
            },
            deviceSize: {
              deviceWidth: 390,
              deviceHeight: 390,
            },
          },
          {
            id: 0,
            url: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            brand: 'string',
            name: 'string',
            category: {
              id: 0,
              smallCategory: 'string',
              bigCategory: 'string',
            },
            size: 'string',
            coordinate: {
              xrate: '244',
              yrate: '342',
            },
            deviceSize: {
              deviceWidth: 390,
              deviceHeight: 390,
            },
          },
        ],
      },
    ],
    styles: [
      {
        name: '데일리',
      },
      {
        name: '데일리',
      },
      {
        name: '데일리',
      },
    ],
    comment: [
      {
        id: 0,
        userName: '권낙현',
        content: '좋반~!',
        userImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        createAt: '5분전',
        childComment: [
          {
            id: 1,
            userName: '권낙현',
            content: '좋반~!',
            userImage:
              'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            taggedUserName: 'knh6269',
            createAt: '1분전',
          },
          {
            id: 2,
            userName: '권낙현',
            content: '좋반~!',
            userImage:
              'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
            taggedUserName: 'knh6269',
            createAt: '지금',
          },
        ],
      },
      {
        id: 0,
        userName: '삼다수',
        content: '맞팔요 ^^',
        userImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        createAt: '0시간 전',
      },
    ],
    bookmark: true,
    like: true,
  });

  const userClothSampleData = {
    userName: '낙낙',
    cloth: [
      {
        clothId: 1,
        bigCategory: '아우터',
        smallCategory: '패딩',
        brand: '나이키',
        size: 'Free',
        clothImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      },
      {
        clothId: 1,
        bigCategory: '아우터',
        smallCategory: '패딩',
        brand: '나이키',
        size: 'Free',
        clothImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      },
      {
        clothId: 1,
        bigCategory: '아우터',
        smallCategory: '패딩',
        brand: '나이키',
        size: 'Free',
        clothImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      },
      {
        clothId: 1,
        bigCategory: '아우터',
        smallCategory: '패딩',
        brand: '나이키',
        size: 'Free',
        clothImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      },
      {
        clothId: 1,
        bigCategory: '아우터',
        smallCategory: '패딩',
        brand: '나이키',
        size: 'Free',
        clothImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      },
    ],
  };

  const userOOTDSampleData = [
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
  ];

  const similarOOTDSampleData = [
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
  ];

  const [comment, setComment] = useState<CommentStateType>({
    ootdId: 0,
    taggedUserName: '',
    parentDepth: 0,
    content: '',
  });
  const [commentWriting, setCommentWriting] = useState<Boolean>(false);
  const [commentFinish, setCommentFinish] = useState<Boolean>(false);
  const commentRef = useRef<any>();

  const registerComment = () => {
    setComment({
      ...comment,
      content: '',
    });
    setCommentWriting(false);
    setCommentFinish(true);
    //댓글 등록 api 연동
  };

  return (
    <S.Layout>
      <Posting data={sampleData} commentRef={commentRef} />
      {sampleData.comment ? (
        <PostingComment
          data={sampleData.comment}
          comment={comment}
          setComment={setComment}
          commentRef={commentRef}
          setCommentWriting={setCommentWriting}
          commentNone={false}
        />
      ) : (
        <PostingComment
          comment={comment}
          setComment={setComment}
          commentRef={commentRef}
          setCommentWriting={setCommentWriting}
          commentNone={true}
        />
      )}
      <UserCloth data={userClothSampleData} />
      <UserOOTD data={userOOTDSampleData} />
      <SimilarOOTD data={similarOOTDSampleData} />
      <PostingCommentWrite
        userImage="https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg"
        setComment={setComment}
        commentRef={commentRef}
        comment={comment}
        commentWriting={commentWriting}
        setCommentWriting={setCommentWriting}
        registerComment={registerComment}
        setCommentFinish={setCommentFinish}
      />
      {commentFinish && <Toast text="댓글이 등록되었습니다." />}
    </S.Layout>
  );
};

export default OOTD;

OOTD.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

OOTD.Layout.displayName = 'SignInLayout';
