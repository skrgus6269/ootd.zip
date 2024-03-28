import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import S from './style';
import Comment, { CommentProps } from '../Comment';
import { Body4, Caption1, Title1 } from '../UI';
import { CommentStateType } from '@/pages/ootd/[...OOTDNumber]';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import { useRouter } from 'next/router';

interface PostingCommentData extends CommentProps {
  childComment?: {
    id: number;
    userName: string;
    userImage: string;
    content: string;
    timeStamp: string;
    parentId?: number;
    taggedUserName?: string;
    depth?: number;
  }[];
}

interface PostingCommentProps {
  reRender: number;
  setReRender: Dispatch<SetStateAction<number>>;
  setComment: Dispatch<SetStateAction<CommentStateType>>;
  commentRef: MutableRefObject<any>;
  comment: CommentStateType;
  setCommentWriting: Dispatch<SetStateAction<Boolean>>;
}

export default function PostingComment({
  reRender,
  setReRender,
  setComment,
  commentRef,
  comment,
  setCommentWriting,
}: PostingCommentProps) {
  const [commentType, setCommentType] = useState<'preview' | 'all'>('preview');
  const localUserId = useRecoilValue(userId);
  const router = useRouter();

  const onClickCommentButton = () => {
    if (commentType === 'preview') setCommentType('all');
    if (commentType === 'all') setCommentType('preview');
  };
  const [data, setData] = useState<PostingCommentData[]>([]);
  const { getOOTDComment } = OOTDApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const { content } = await getOOTDComment({
        page: 0,
        size: 100,
        ootdId: Number(router.query.OOTDNumber![0]),
      });
      const map = new Map<number, PostingCommentData>();
      const resultData: PostingCommentData[] = [];

      content.forEach((comment: PostingCommentData) => {
        if (comment.depth === 1) map.set(comment.id, comment);
      });

      content.forEach((comment: PostingCommentData) => {
        if (comment.parentId !== null) {
          const parentComment = map.get(comment.parentId!);
          if (parentComment) {
            if (!parentComment.childComment) {
              parentComment.childComment = [];
            }
            parentComment.childComment.push(comment);
          }
        } else {
          resultData.push(comment);
        }
      });
      setData(resultData);
    };
    fetchData();
  }, [router.isReady, reRender, router.query.OOTDNumber]);

  const onClickReplyButton = (userName: string, commentId: number) => {
    setComment({
      ...comment,
      taggedUserName: userName,
      parentDepth: 1,
      commentParentId: commentId,
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
              userId={item.userId}
              key={item.id}
              userImage={item.userImage}
              id={item.id}
              userName={item.userName}
              content={item.content}
              view="preview"
              timeStamp={item.timeStamp}
              reRender={reRender}
              setReRender={setReRender}
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
              userId={item.userId}
              userImage={item.userImage}
              id={item.id}
              userName={item.userName}
              content={item.content}
              onClickReplyButton={() =>
                onClickReplyButton(data![index].userName, item.id)
              }
              timeStamp={item.timeStamp}
              myComment={localUserId === item.userId}
              reRender={reRender}
              setReRender={setReRender}
            />
            {item &&
              item.childComment?.map((items, indexs) => (
                <Comment
                  key={items.id}
                  userId={item.userId}
                  userImage={items.userImage}
                  id={items.id}
                  userName={items.userName}
                  content={items.content}
                  onClickReplyButton={() =>
                    onClickReplyButton(
                      item.childComment![indexs].userName,
                      item.id
                    )
                  }
                  type="child"
                  taggedUserName={items.taggedUserName}
                  timeStamp={items.timeStamp}
                  myComment={localUserId === item.userId}
                  reRender={reRender}
                  setReRender={setReRender}
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
  if (data.length === 0) {
    return (
      <S.CommentNone>
        <Title1 className="title">아직 작성된 댓글이 없습니다.</Title1>
        <Caption1 className="body">첫 번째 댓글을 남겨보세요.</Caption1>
      </S.CommentNone>
    );
  }
  return <>{commentType === 'preview' ? <ComentPreview /> : <ComentAll />}</>;
}
