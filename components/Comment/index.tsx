/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from 'react';
import { Body3, Caption1 } from '../UI';
import S from './style';
import Avatar from '@/public/images/Avatar.svg';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';

export interface CommentProps {
  id: number;
  userId: number;
  userImage: string;
  userName: string;
  content: string;
  timeStamp: string;
  type?: 'child';
  view?: 'preview';
  onClickReplyButton?: () => void;
  taggedUserName?: string;
  myComment?: Boolean;
  parentId?: number;
  reRender: number;
  depth?: number;
  setReRender: Dispatch<SetStateAction<number>>;
}

function Comment({
  id,
  userName,
  userImage,
  content,
  timeStamp,
  type,
  view,
  onClickReplyButton,
  taggedUserName,
  myComment,
  reRender,
  setReRender,
}: CommentProps) {
  const { deleteOOTDComment } = OOTDApi();

  const onClickDeleteButton = async () => {
    try {
      await deleteOOTDComment(id);
      setReRender(reRender + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Layout type={type}>
      <S.CommentLeft>
        {userImage == null ? (
          <Avatar className="avatar" />
        ) : (
          <S.UserImage>
            <img className="userImage" src={userImage} alt="유저 이미지" />
          </S.UserImage>
        )}
      </S.CommentLeft>
      <S.CommentRight>
        <S.UserName>
          <Body3>{userName}</Body3>
          <Caption1 className="createAt">{timeStamp}</Caption1>
        </S.UserName>
        <S.UserComment>
          <Body3 className="taggedUser">
            {taggedUserName && `@${taggedUserName}`}&nbsp;
          </Body3>
          <Body3>{content}</Body3>
        </S.UserComment>
        {view !== 'preview' ? (
          <S.CommentCommunication>
            <Caption1 onClick={onClickReplyButton}>답글달기</Caption1>
            {myComment ? (
              <>
                <Caption1 onClick={onClickDeleteButton}>삭제</Caption1>
              </>
            ) : (
              <Caption1>신고</Caption1>
            )}
          </S.CommentCommunication>
        ) : (
          ''
        )}
      </S.CommentRight>
    </S.Layout>
  );
}

export default React.memo(Comment);
