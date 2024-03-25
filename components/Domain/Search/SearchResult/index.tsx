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

  const [filter, setFilter] = useState<FilterData>({
    category: null,
    color: null,
    brand: null,
    gender: {
      man: false,
      woman: false,
    },
  });

  const [sortStandard, setSortStandard] = useState<string>('LATEST');

  const [profileList, setProfileList] = useState<ProfileListType[]>([]);
  const [OOTDList, setOOTDList] = useState<OOTDListType[]>([]);

  const router = useRouter();
  const { getSearchUser } = UserApi();
  const { getSearchOOTD } = OOTDApi();

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

  const [genderData, setGenderData] = useState<string>('');

  useEffect(() => {
    if (filter.gender.man && filter.gender.woman) {
      setGenderData('');
    } else if (filter.gender.man) {
      setGenderData('MALE');
    } else if (filter.gender.woman) {
      setGenderData('FEMALE');
    } else {
      setGenderData('');
    }
  }, [filter.gender]);

  const fetchOOTDDataFunction = async (ootdPage: number, ootdSize: number) => {
    if (!router.isReady) return;

    const data = await getSearchOOTD({
      searchText: keywordsValue,
      categoryIds: filter.category?.map((item) => {
        if (item.state) {
          return item.id;
        }
        return item.detailCategories![0].id;
      }),
      colorIds: filter.color?.map((item) => item.id),
      brandIds: filter.brand?.map((item) => item.id),
      writerGender: genderData,
      sortCriteria: sortStandard,
      page: ootdPage,
      size: ootdSize,
    });

    return data;
  };

  const {
    data: OOTDData,
    isLoading: OOTDIsLoading,
    containerRef: OOTDRef,
    hasNextPage: OOTDHasNextPage,
    reset: ootdReset,
  } = useInfiniteScroll({
    fetchDataFunction: fetchOOTDDataFunction,
    size: 9,
    initialData: [],
  });

  useEffect(() => {
    setOOTDList(
      OOTDData.map((item: any) => {
        return {
          id: item.id,
          imageUrl: item.imageUrl,
        };
      })
    );
  }, [OOTDData]);

  useEffectAfterMount(() => {
    setOOTDList([]);
    ootdReset();
    setFilter({
      category: null,
      color: null,
      brand: null,
      gender: {
        man: false,
        woman: false,
      },
    });
  }, [keywordsValue, sortStandard]);

  return (
    <>
      <S.Layout>
        <ClosetTabbar handleStep={handleStep} currentStep={currentStep} />
        <Funnel>
          <Funnel.Steps name="OOTD">
            {OOTDList.length > 0 ? (
              <ClosetCloth
                filter={filter}
                setFilter={setFilter}
                sortStandard={sortStandard}
                setSortStandard={setSortStandard}
                OOTDList={OOTDList}
                OOTDIsLoading={OOTDIsLoading}
                OOTDRef={OOTDRef}
                OOTDHasNextPage={OOTDHasNextPage}
              />
            ) : (
              <EmptySearch />
            )}
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
