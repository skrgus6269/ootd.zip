import { Body3, Button3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { followListType } from '@/pages/follow-list/[...UserId]';

interface followerProps {
  setAlertOpen: Dispatch<SetStateAction<Boolean>>;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  followerList?: followListType[];
  localUserId: number;
  showingId: number | undefined;
}

export default function Follower({
  setAlertOpen,
  keyword,
  setKeyword,
  followerList,
  localUserId,
  showingId,
}: followerProps) {
  const router = useRouter();

  console.log(followerList);

  const onClickDelete = () => {
    setAlertOpen(true);
  };

  const onClickFollow = async (status: Boolean, id: number) => {
    console.log(status, id);
    // if (status) await unFollow(id);
    // else await follow(id);
  };

  return (
    <>
      <S.Wrap>
        <SearchBar placeholder="검색" letter={keyword} setLetter={setKeyword} />
      </S.Wrap>
      <S.Layout>
        {followerList &&
          followerList.map((item, index) => {
            return (
              <>
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
              </>
            );
          })}
      </S.Layout>
    </>
  );
}
