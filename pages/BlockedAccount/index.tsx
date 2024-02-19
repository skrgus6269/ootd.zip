import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button3, Title1 } from '@/components/UI';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import FollowBlock from '@/components/FollowBlock';
import BlockAlert from '@/components/Setting/BlockAlert';

export default function LikeInfo() {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  const blockedList = [
    {
      profileId: 0,
      name: 'Userame0',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: true,
    },
    {
      profileId: 1,
      name: 'Userame1',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: true,
    },
    {
      profileId: 2,
      name: 'Userame2',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: true,
    },
    {
      profileId: 3,
      name: 'Userame3',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: true,
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: true,
    },
  ];

  const onClickFollow = () => {
    setAlertOpen(true);
  };

  const onClickYesButton = () => {
    console.log('팔로우');
  };

  const onClickNoButton = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={() => setAlertOpen(false)} />
      <AppBar
        leftProps={
          <AiOutlineArrowLeft
            onClick={() => router.back()}
            className="arrowleft"
          />
        }
        middleProps={<></>}
        rightProps={<></>}
      />
      <Header text="차단한 계정" />
      {blockedList &&
        blockedList.map((item, index) => {
          return (
            <FollowBlock
              key={index}
              data={item}
              onClick={onClickFollow}
              state="blcok"
            />
          );
        })}

      {alertOpen && (
        <BlockAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )}
    </>
  );
}
