import { Body3, Body4, Button3, Caption2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import { followListType } from '@/pages/follow-list/[...UserId]';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { PublicApi } from '@/apis/domain/Public/PublicApi';
import SearchBar from '@/components/SearchBar';

interface followingProps {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  followingList?: followListType[];
}

export default function Following({
  keyword,
  setKeyword,
  followingList,
}: followingProps) {
  const router = useRouter();

  console.log(followingList);
  const { follow, unFollow } = PublicApi();

  const onClickFollow = async (status: Boolean, id: number) => {
    console.log(status, id);
    // if (status) await unFollow(id);
    // else await follow(id);
  };

  return (
    <>
      <S.Background isOpen={false}></S.Background>
      <S.Wrap>
        <SearchBar placeholder="검색" letter={keyword} setLetter={setKeyword} />
      </S.Wrap>
      <S.Layout>
        {followingList &&
          followingList.map((item, index) => {
            return (
              <S.FollowBlockLayout key={index}>
                <img src={item.userImage} alt="" />
                <Body3 state="emphasis" className="name">
                  {item.userName}
                </Body3>

                {item.isFollow ? (
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
      </S.Layout>
    </>
  );
}
