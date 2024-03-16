import AppBar from '@/components/Appbar';
import S from '@/style/followList/style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useFunnel } from '@/hooks/use-funnel';
import Follower from '@/components/Domain/FollowList/Follower';
import FollowTabbar from '@/components/Domain/FollowList/FollowTabbar';
import Following from '@/components/Domain/FollowList/Following';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

export default function FollowList() {
  const router = useRouter();
  const [Funnel, currentStep, handleStep] = useFunnel(['팔로워', '팔로잉']);

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

  const followingList = [
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
    },
    {
      profileId: 2,
      name: 'Userame2',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 3,
      name: 'Userame3',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      profileId: 4,
      name: 'Userame4',
      profileImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
  ];

  const [keyword, setKeyword] = useState<string>('');

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
          rightProps={<></>}
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
    </>
  );
}
