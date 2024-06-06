import { Body3, Button3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { followListType } from '@/pages/follow-list/[...UserId]';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { UserApi } from '@/apis/domain/User/UserApi';
import NextImage from '@/components/NextImage';
import Avatar from '@/public/images/Avatar.svg';
import PublicApi from '@/apis/domain/Public/PublicApi';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import Spinner from '@/components/Spinner';

interface followerProps {
  setSelectedUserName: Dispatch<SetStateAction<string>>;
  setAlertOpen: Dispatch<SetStateAction<Boolean>>;
  followerList?: followListType[];
  setFollowerList: Dispatch<SetStateAction<followListType[]>>;
  localUserId: number;
  setFollowerTotalCount: Dispatch<SetStateAction<number>>;
}

export default function Follower({
  setSelectedUserName,
  setAlertOpen,
  followerList,
  setFollowerList,
  localUserId,
  setFollowerTotalCount,
}: followerProps) {
  const router = useRouter();

  const [keyword, setKeyword] = useState<string>('');
  const { getSearchUserFollower } = UserApi();
  const myId = useRecoilValue(userId);

  const { follow, unFollow } = PublicApi();

  const onClickFollow = async (status: Boolean, id: number, index: number) => {
    let newFollowerList = [...followerList!];

    newFollowerList[index].isFollow = !newFollowerList[index].isFollow;

    setFollowerList(newFollowerList);

    if (!status) {
      await follow(id);
      return;
    }
    await unFollow(id);
  };

  const fetchDataFunction = async (page: number, size: number) => {
    const data = await getSearchUserFollower({
      page,
      size,
      name: keyword,
      userId: Number(router.query.UserId![0]),
    });
    return data;
  };

  const { data, reset, containerRef, total, isLoading, hasNextPage } =
    useInfiniteScroll({
      fetchDataFunction,
      initialData: [],
      size: 20,
    });

  useEffect(() => {
    const newData = data.map((item: any) => {
      return {
        userId: item.id,
        userImage: item.profileImage,
        isFollow: item.isFollow,
        userName: item.name,
      };
    });
    setFollowerList(newData);
  }, [data]);

  const onClickDelete = (userName: string) => {
    setSelectedUserName(userName);
    setAlertOpen(true);
  };

  useEffect(() => {
    reset();
  }, [keyword]);

  useEffect(() => {
    setFollowerTotalCount(total);
  }, [total]);

  return (
    <>
      <S.Wrap>
        <SearchBar placeholder="검색" letter={keyword} setLetter={setKeyword} />
      </S.Wrap>
      {isLoading && hasNextPage && <Spinner />}
      <S.Layout ref={containerRef}>
        {followerList &&
          followerList.map((item, index) => {
            return (
              <S.FollowBlockLayout key={item.userId}>
                {item.userImage === '' ? (
                  <Avatar
                    onClick={() => router.push(`/mypage/${item.userId}`)}
                    className="avatar"
                  />
                ) : (
                  <NextImage
                    width={52}
                    height={52}
                    fill={false}
                    src={item.userImage}
                    onClick={() => router.push(`/mypage/${item.userId}`)}
                    alt=""
                  />
                )}
                <Body3
                  state="emphasis"
                  className="name"
                  onClick={() => router.push(`/mypage/${item.userId}`)}
                >
                  {item.userName}
                </Body3>
                {myId === item.userId ? (
                  <></>
                ) : router.isReady &&
                  localUserId === Number(router.query.UserId![0]) ? (
                  <Button3
                    className="delete"
                    onClick={() => onClickDelete(item.userName)}
                  >
                    차단
                  </Button3>
                ) : item.isFollow ? (
                  <Button3
                    className="unfollow"
                    onClick={() =>
                      onClickFollow(item.isFollow, item.userId, index)
                    }
                  >
                    팔로잉
                  </Button3>
                ) : (
                  <Button3
                    className="following"
                    onClick={() =>
                      onClickFollow(item.isFollow, item.userId, index)
                    }
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
