import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import ClosetTabbar from './ClosetTabbar';
import ClosetCloth, { FilterData, OOTDListType } from './ClosetCloth';
import Profile, { ProfileListType } from './Profile';
import EmptySearch from '@/components/EmptySearch';
import { UserApi } from '@/apis/domain/User/UserApi';
import { useRouter } from 'next/router';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useEffect, useState } from 'react';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';

interface searchResultProps {
  keywordsValue: string;
}

export default function SearchResult({ keywordsValue }: searchResultProps) {
  const [Funnel, currentStep, handleStep] = useFunnel(['OOTD', 'Profile']);

  const [profileList, setProfileList] = useState<ProfileListType[]>([]);

  const router = useRouter();
  const { getSearchUser } = UserApi();

  const fetchDataFunction = async (
    profilePage: number,
    profileSize: number
  ) => {
    if (!router.isReady) return;

    const data = await getSearchUser({
      page: profilePage,
      size: profileSize,
      name: keywordsValue,
    });

    return data;
  };

  const {
    data: profileData,
    isLoading: profileIsLoading,
    containerRef: profileRef,
    hasNextPage: profileHasNextPage,
    reset,
  } = useInfiniteScroll({
    fetchDataFunction,
    size: 10,
    initialData: [],
  });

  useEffect(() => {
    setProfileList(
      profileData.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          profileImage: item.profileImage,
          isFollow: item.isFollow,
        };
      })
    );
  }, [profileData]);

  useEffectAfterMount(() => {
    setProfileList([]);
    reset();
  }, [keywordsValue]);

  return (
    <>
      <S.Layout>
        <ClosetTabbar handleStep={handleStep} currentStep={currentStep} />
        <Funnel>
          <Funnel.Steps name="OOTD">
            <ClosetCloth keywordsValue={keywordsValue} />
          </Funnel.Steps>
          <Funnel.Steps name="Profile">
            {profileList.length > 0 ? (
              <Profile
                profileList={profileList}
                profileIsLoading={profileIsLoading}
                profileRef={profileRef}
                profileHasNextPage={profileHasNextPage}
              />
            ) : (
              <EmptySearch />
            )}
          </Funnel.Steps>
        </Funnel>
      </S.Layout>
    </>
  );
}
