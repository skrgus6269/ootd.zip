import { Body4, Caption2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import { followerType } from '../Follower';
import FollowBlock from '@/components/FollowBlock';

interface followingProps {
  followingList?: followerType[];
}

export default function Following({ followingList }: followingProps) {
  const router = useRouter();

  console.log(followingList);

  const onClickFollow = () => {
    console.log('111');
  };

  return (
    <>
      <S.Background isOpen={false}></S.Background>
      <S.Layout>
        {followingList &&
          followingList.map((item, index) => {
            return (
              <FollowBlock
                key={index}
                data={item}
                onClick={onClickFollow}
                state="block"
              />
            );
          })}
      </S.Layout>
    </>
  );
}
