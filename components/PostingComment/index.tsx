import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useState,
} from 'react';
import S from './style';
import Comment, { CommentProps } from '../Comment';
import { Body4, Caption1, Headline3 } from '../UI';
import { CommentStateType } from '@/pages/OOTD/[...OOTDNumber]';
import { useRecoilValue } from 'recoil';
import { userNames } from '@/utils/recoil/atom';

interface PostingCommentData extends CommentProps {
  childComment?: {
    id: number;
    userName: string;
    userImage: string;
    content: string;
    timeStamp: string;
    taggedUserName: string;
  }[];
}

interface PostingCommentProps {
  data?: PostingCommentData[];
  setComment: Dispatch<SetStateAction<CommentStateType>>;
  commentRef: MutableRefObject<any>;
  comment: CommentStateType;
  setCommentWriting: Dispatch<SetStateAction<Boolean>>;
  commentNone: Boolean;
}

export default function PostingComment({
  data,
  setComment,
  commentRef,
  comment,
  setCommentWriting,
  commentNone,
}: PostingCommentProps) {
  const [commentType, setCommentType] = useState<'preview' | 'all'>('preview');
  const localUserName = useRecoilValue(userNames);

  const onClickCommentButton = () => {
    if (commentType === 'preview') setCommentType('all');
    if (commentType === 'all') setCommentType('preview');
  };

  const onClickReplyButton = (userName: string, type: string) => {
    let parentDepth = 0;
    console.log(data);
    //뎁스가 1인 부모를 선택했다면
    if (type === 'child') {
      parentDepth = 1;
    }
    setComment({
      ...comment,
      taggedUserName: userName,
      parentDepth,
    });
    setCommentWriting(true);
    commentRef.current.focus();
  };

  const ComentPreview = () => {
    return (
      <S.Layout>
        {data!.slice(0, 2).map((item) => (
          <>
            <Comment
              key={item.id}
              userImage={item.userImage}
              id={item.id}
              userName={item.userName}
              content={item.content}
              view="preview"
              timeStamp={item.timeStamp}
            />
          </>
        ))}
        <S.CommentOpenButton onClick={onClickCommentButton}>
          <Caption1>댓글 더보기</Caption1>
        </S.CommentOpenButton>
      </S.Layout>
    );
  };

  const ComentAll = () => {
    return (
      <S.Layout>
        <Body4 className="commentLength">총{data!.length}개의 댓글</Body4>
        {data!.map((item, index) => (
          <>
            <Comment
              key={item.id}
              userImage={item.userImage}
              id={item.id}
              userName={item.userName}
              content={item.content}
              onClickReplyButton={() =>
                onClickReplyButton(data![index].userName, 'parent')
              }
              timeStamp={item.timeStamp}
              myComment={localUserName === item.userName}
            />
            {item &&
              item.childComment?.map((items, indexs) => (
                <Comment
                  key={items.id}
                  userImage={items.userImage}
                  id={items.id}
                  userName={items.userName}
                  content={items.content}
                  onClickReplyButton={() =>
                    onClickReplyButton(
                      item.childComment![indexs].userName,
                      'child'
                    )
                  }
                  type="child"
                  taggedUserName={items.taggedUserName}
                  timeStamp={items.timeStamp}
                  myComment={localUserName === item.userName}
                />
              ))}
          </>
        ))}
        <S.CommentOpenButton onClick={onClickCommentButton}>
          <Caption1>댓글 접기</Caption1>
        </S.CommentOpenButton>
      </S.Layout>
    );
  };
  if (commentNone) {
    return (
      <S.CommentNone>
        <Headline3 className="title">아직 작성된 댓글이 없습니다.</Headline3>
        <Caption1 className="body">첫 번째 댓글을 남겨보세요.</Caption1>
      </S.CommentNone>
    );
  }
  return <>{commentType === 'preview' ? <ComentPreview /> : <ComentAll />}</>;
}
