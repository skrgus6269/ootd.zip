import { Body3, Body4, Button3, Caption2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import FollowBlock from '@/components/FollowBlock';
import FollowAlert from '../FollowAlert';
import { useState } from 'react';
import Toast from '@/components/Toast';
import { followListType } from '@/pages/followList/[...UserId]';

interface followerProps {
  followerList?: followListType[];
}

export default function Follower({ followerList }: followerProps) {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);
  const [toastOpen, setToastOpen] = useState<Boolean>(false);

  console.log(followerList);

  const onClickFollow = () => {
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

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={() => setAlertOpen(false)} />
      <S.Layout>
        {followerList &&
          followerList.map((item, index) => {
            return (
              <S.FollowBlockLayout key={index}>
                <img src={item.userImage} alt="" />
                <Body3 state="emphasis" className="name">
                  {item.userName}
                </Body3>

                <Button3 className="delete" onClick={() => onClickFollow()}>
                  삭제
                </Button3>
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
