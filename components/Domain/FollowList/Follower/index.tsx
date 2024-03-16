import { Body4, Caption2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import FollowBlock from '@/components/FollowBlock';

export type followerType = {
  profileId: number;
  name: string;
  profileImage: string;
};

interface followerProps {
  followerList?: followerType[];
}

export default function Follower({ followerList }: followerProps) {
  const router = useRouter();

  console.log(followerList);

  const onClickFollow = () => {
    console.log('클릭');
  };

  return (
    <>
      <S.Background isOpen={false}></S.Background>
      <S.Layout>
        {followerList &&
          followerList.map((item, index) => {
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
