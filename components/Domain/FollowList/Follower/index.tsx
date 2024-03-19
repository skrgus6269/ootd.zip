import { Body3, Button3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import FollowAlert from '../FollowAlert';
import { useState } from 'react';
import Toast from '@/components/Toast';
import SearchBar from '@/components/SearchBar';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { followListType } from '@/pages/follow-list/[...UserId]';

interface followerProps {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  followerList?: followListType[];
  localUserId: number;
  showingId: number | undefined;
}

export default function Follower({
  keyword,
  setKeyword,
  followerList,
  localUserId,
  showingId,
}: followerProps) {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);
  const [toastOpen, setToastOpen] = useState<Boolean>(false);

  console.log(followerList);

  const onClickDelete = () => {
    setAlertOpen(true);
  };

  const onClickYesButton = () => {
    console.log('팔로우');
    setAlertOpen(false);
    setToastOpen(true);
  };

  const onClickNoButton = () => {
    setAlertOpen(false);
  };

  const onClickFollow = async (status: Boolean, id: number) => {
    console.log(status, id);
    // if (status) await unFollow(id);
    // else await follow(id);
  };

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={() => setAlertOpen(false)} />
      <S.Wrap>
        <SearchBar placeholder="검색" letter={keyword} setLetter={setKeyword} />
      </S.Wrap>
      <S.Layout>
        {followerList &&
          followerList.map((item, index) => {
            return (
              <S.FollowBlockLayout key={index}>
                <img src={item.userImage} alt="" />
                <Body3 state="emphasis" className="name">
                  {item.userName}
                </Body3>
                {localUserId === showingId ? (
                  <Button3 className="delete" onClick={() => onClickDelete()}>
                    삭제
                  </Button3>
                ) : item.isFollow ? (
                  <Button3
                    className="unfollow"
                    onClick={() => onClickFollow(item.isFollow, item.userId)}
                  >
                    팔로잉
                  </Button3>
                ) : (
                  <Button3
                    className="following"
                    onClick={() => onClickFollow(item.isFollow, item.userId)}
                  >
                    팔로우
                  </Button3>
                )}
              </S.FollowBlockLayout>
            );
          })}

        {alertOpen && (
          <FollowAlert
            onClickYesButton={onClickYesButton}
            onClickNoButton={onClickNoButton}
          />
        )}
        {toastOpen && <Toast text="삭제되었습니다." />}
      </S.Layout>
    </>
  );
}
