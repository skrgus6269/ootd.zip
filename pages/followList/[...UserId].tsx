import AppBar from '@/components/Appbar';
import S from '@/style/followList/style';
import {
  AiOutlineArrowLeft,
  AiOutlineEllipsis,
  AiOutlineSetting,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useFunnel } from '@/hooks/use-funnel';
import Follower from '@/components/Domain/FollowList/Follower';
import FollowTabbar from '@/components/Domain/FollowList/FollowTabbar';
import Following from '@/components/Domain/FollowList/Following';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import ActionSheet from '@/components/ActionSheet';
import { userId } from '@/utils/recoil/atom';
import { useRecoilValue } from 'recoil';

export default function FollowList() {
  const router = useRouter();
  const [Funnel, currentStep, handleStep] = useFunnel(['팔로워', '팔로잉']);

  const [showingId, setShowingId] = useState<number>();
  const localUserId = useRecoilValue(userId);

  useEffect(() => {
    const ferchData = async () => {
      if (!router.isReady) return;
      try {
        // 팔로우 팔로잉 리스트 초기 API 호출
        setShowingId(Number(router.query.UserId![0]));
      } catch (err) {
        console.log(err);
      }
    };

    ferchData();
  }, [router.isReady, router.query.userId]);

  const followerList = [
    {
      profileId: 0,
      name: 'Userame0',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
    },
    {
      profileId: 1,
      name: 'Userame1',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
    },
    {
      profileId: 2,
      name: 'Userame2',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
    },
    {
      profileId: 3,
      name: 'Userame3',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
    },
  ];

  const followingList = [
    {
      profileId: 0,
      name: 'Userame0',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
      followCheck: false,
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
    {
      profileId: 4,
      name: 'Userame4',
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
    {
      profileId: 4,
      name: 'Userame4',
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

  const [keyword, setKeyword] = useState<string>('');
  const [openActionSheet, setOpenActionSheet] = useState<Boolean>(false);

  const goBlockedList = () => {
    router.push('/BlockedAccount');
  };
  const buttons = [{ name: '차단한 계정 관리', buttonClick: goBlockedList }];

  return (
    <>
      <S.Layout>
        <AppBar
          leftProps={
            <AiOutlineArrowLeft
              onClick={() => router.back()}
              className="arrowleft"
            />
          }
          middleProps={<></>}
          rightProps={
            localUserId === showingId ? (
              <AiOutlineEllipsis onClick={() => setOpenActionSheet(true)} />
            ) : (
              <></>
            )
          }
        />
        <FollowTabbar
          followerNumber={followerList ? followerList.length : 0}
          followingNumber={followingList ? followingList.length : 0}
          handleStep={handleStep}
          currentStep={currentStep}
        />
        <S.Wrap>
          <SearchBar
            placeholder="검색"
            letter={keyword}
            setLetter={setKeyword}
          />
        </S.Wrap>
        <Funnel>
          <Funnel.Steps name="팔로워">
            <Follower followerList={followerList} />
          </Funnel.Steps>
          <Funnel.Steps name="팔로잉">
            <Following followingList={followingList} />
          </Funnel.Steps>
        </Funnel>
      </S.Layout>
      {openActionSheet && <ActionSheet buttons={buttons} />}
    </>
  );
}
