import { Body4, Button3, Caption1, Headline2, Title1 } from '@/components/UI';
import S from './style';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Rectangle from 'public/images/rectangle.png';

interface BookmarkSubHeadProps {
  editing: Boolean;
  setEditing: Dispatch<SetStateAction<Boolean>>;
  setAlertOpen: Dispatch<SetStateAction<Boolean>>;
  count: number;
}

export default function BookmarSubHead({
  editing,
  setEditing,
  setAlertOpen,
  count,
}: BookmarkSubHeadProps) {
  return (
    <>
      <S.headLayout>
        <S.Frame>
          <Body4 state="emphasis" className="bookmarkSubHeadText">
            {editing ? `${count}개의 게시글이 선택됨` : `4개의 게시글`}
          </Body4>
        </S.Frame>
        <S.Wrap>
          {editing ? (
            <>
              <button onClick={() => setAlertOpen(true)}>
                <Button3 style={{ color: '#EC0000' }} state="emphasis">
                  삭제
                </Button3>
              </button>

              <Image src={Rectangle} alt="Rectangle" width={1} height={20} />

              <button onClick={() => setEditing(false)}>
                <Button3 state="emphasis">취소</Button3>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setEditing(true)}>
                <Button3 state="emphasis">편집</Button3>
              </button>
            </>
          )}
        </S.Wrap>
      </S.headLayout>
    </>
  );
}
