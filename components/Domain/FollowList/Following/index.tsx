import { Body3, Body4, Button3, Caption2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import { followListType } from '@/pages/followList/[...UserId]';
import FollowBlock from '@/components/FollowBlock';
import Button from '@/components/Button';
import { PublicApi } from '@/apis/domain/Public/PublicApi';

interface followingProps {
  followingList?: followListType[];
  localUserId: number;
  showingId: number | undefined;
}

export default function Following({ followingList }: followingProps) {
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
