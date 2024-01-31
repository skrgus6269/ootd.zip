/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Body3, Caption1 } from '../UI';
import S from './style';

export interface CommentProps {
  id: number;
  userImage: string;
  userName: string;
  content: string;
  createAt: string;
  type?: 'child';
  view?: 'preview';
  onClickReplyButton?: () => void;
  taggedUserName?: string;
  myComment?: Boolean;
}

function Comment(data: CommentProps) {
  return (
    <S.Layout type={data.type}>
      <S.CommentLeft>
        <S.UserImage>
          <img className="userImage" src={data.userImage} alt="유저 이미지" />
        </S.UserImage>
      </S.CommentLeft>
      <S.CommentRight>
        <S.UserName>
          <Body3>{data.userName}</Body3>
          <Caption1 className="createAt">{data.createAt}</Caption1>
        </S.UserName>
        <S.UserComment>
          <Body3 className="taggedUser">
            {data.taggedUserName && `@${data.taggedUserName}`}&nbsp;
          </Body3>
          <Body3>{data.content}</Body3>
        </S.UserComment>
        {data.view !== 'preview' ? (
          <S.CommentCommunication>
            <Caption1 onClick={data.onClickReplyButton}>답글달기</Caption1>
            {data.myComment ? (
              <>
                <Caption1>수정</Caption1>
                <Caption1>삭제</Caption1>
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
