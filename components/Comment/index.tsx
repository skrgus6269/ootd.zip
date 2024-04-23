import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Body3, Caption1 } from '../UI';
import S from './style';
import Avatar from '@/public/images/Avatar.svg';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import DeclarationModal from '../DeclarationModal';
import ReceivedDeclarationModal from '../ReceivedDeclarationModal';
import NextImage from '../NextImage';

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
  declaration: Boolean;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
  receivedDeclaration: Boolean;
  setReceivedDeclaration: Dispatch<SetStateAction<Boolean>>;
  reportUserName: string;
  setReportUserName: Dispatch<SetStateAction<string>>;
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
  declaration,
  setDeclaration,
  receivedDeclaration,
  setReceivedDeclaration,
  reportUserName,
  setReportUserName,
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

  const onClickReportButton = async () => {
    setReportUserName(userName);
    setDeclaration(true);
  };

  const onClickBackground = () => {
    if (declaration) setDeclaration(false);
    if (receivedDeclaration) setReceivedDeclaration(false);
  };

  return (
    <>
      <S.Background
        isOpen={declaration || receivedDeclaration}
        onClick={onClickBackground}
      />
      <S.Layout type={type}>
        <S.CommentLeft>
          {userImage === '' ? (
            <Avatar className="avatar" />
          ) : (
            <S.UserImage>
              <NextImage
                className="userImage"
                src={userImage}
                alt="유저 이미지"
                fill={false}
                width={type === 'child' ? 24 : 32}
                height={type === 'child' ? 24 : 32}
              />
            </S.UserImage>
          )}
        </S.CommentLeft>
        <S.CommentRight>
          <S.UserName>
            <Body3>{userName}</Body3>
            <Caption1 className="createAt">{timeStamp}</Caption1>
          </S.UserName>
          <S.UserComment>
            {taggedUserName && (
              <Body3 className="taggedUser">@{taggedUserName}</Body3>
            )}
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
                <Caption1 onClick={onClickReportButton}>신고</Caption1>
              )}
            </S.CommentCommunication>
          ) : (
            ''
          )}
        </S.CommentRight>
      </S.Layout>
    </>
  );
}

export default React.memo(Comment);
