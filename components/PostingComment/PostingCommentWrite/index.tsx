/* eslint-disable @next/next/no-img-element */
import { Body3, Button3 } from '@/components/UI';
import S from './style';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { CommentStateType } from '@/pages/OOTD/[...OOTDNumber]';
import { AiFillCloseCircle } from 'react-icons/ai';

interface PostingCommentWriteProps {
  comment: CommentStateType;
  userImage: string;
  setComment: Dispatch<SetStateAction<CommentStateType>>;
  commentRef: MutableRefObject<null>;
  commentWriting: Boolean;
  setCommentWriting: Dispatch<SetStateAction<Boolean>>;
  registerComment: () => void;
  setCommentFinish: Dispatch<SetStateAction<Boolean>>;
}
export default function PostingCommentWrite({
  comment,
  userImage,
  setComment,
  commentRef,
  commentWriting,
  setCommentWriting,
  registerComment,
  setCommentFinish,
}: PostingCommentWriteProps) {
  return (
    <S.Layout>
      {commentWriting && (
        <S.CommentWriteState>
          <Body3 className="taggedUserName">{comment.taggedUserName}</Body3>
          <Body3>님에게 답글 남기는중</Body3>
          <AiFillCloseCircle
            onClick={() => {
              setComment({
                ...comment,
                content: '',
              });
              setCommentWriting(false);
            }}
            className="closeButton"
          />
        </S.CommentWriteState>
      )}

      <S.CommentWrite>
        <S.UserImage>
          <img src={userImage} alt="유저 프로필 이미지" />
        </S.UserImage>
        <S.Comment>
          <S.Text>
            <S.Input
              line={Math.floor(comment.content.length / 21) + 2}
              ref={commentRef}
              onChange={(e) => {
                setComment({ ...comment, content: e.target.value });
                setCommentFinish(false);
              }}
              placeholder="댓글을 남겨보세요."
              value={comment.content}
            />
          </S.Text>
          <S.Upload>
            <Button3 onClick={registerComment}>등록</Button3>
          </S.Upload>
        </S.Comment>
      </S.CommentWrite>
    </S.Layout>
  );
}
