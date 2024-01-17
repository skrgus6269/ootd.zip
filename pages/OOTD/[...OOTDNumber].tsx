import { useOOTD } from '@/hooks/useOOTD';
import S from './style';
import Posting from '@/components/Posting';
import PostingComment from '@/components/PostingComment';
import UserCloth from '@/components/OOTD/UserCloth';
import UserOOTD from '@/components/OOTD/UserOOTD';
import SimilarOOTD from '@/components/OOTD/SimilarOOTD';
import PostingCommentWrite from '@/components/PostingComment/PostingCommentWrite';
import { useRef, useState } from 'react';
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import { OOTDType } from './type';

export interface CommentStateType {
  ootdId: number;
  taggedUserName: string;
  parentDepth: number;
  content: string;
}

const OOTD: ComponentWithLayout = () => {
  const [getOOtd] = useOOTD();

  const [sample, setSample] = useState([
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
  ]);

  const [sampleData, setSampleData] = useState<OOTDType>({
    id: 0,
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
        userName: '낙낙',
        userImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        content: '안녕하세요',
        timeStamp: '5분전',
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
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
  ];

  const similarOOTDSampleData = [
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      imageId: 1,
      image:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      userName: '낙낙',
    },
    {
      imageId: 1,
      image:
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
  const commentRef = useRef<any>();

  const registerComment = () => {
    setComment({
      ...comment,
      content: '',
    });
    setCommentWriting(false);
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
      />
    </S.Layout>
  );
};

export default OOTD;

OOTD.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

OOTD.Layout.displayName = 'SignInLayout';
