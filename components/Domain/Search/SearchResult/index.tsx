import S from './style';
import ClosetCloth, { OOTDListType } from './ClosetCloth';
import Profile, { ProfileListType } from './Profile';
import EmptySearch from '@/components/EmptySearch';
import { UserApi } from '@/apis/domain/User/UserApi';
import { useRouter } from 'next/router';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useEffect, useState } from 'react';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import TabView from '@/components/TabView';
import { FilterData } from '../../MyPage/Closet/ClosetCloth';
import useRememberScroll from '@/hooks/useRememberScroll';

interface searchResultProps {
  keywordsValue: string;
}

export default function SearchResult({ keywordsValue }: searchResultProps) {
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
    size: 12,
    initialData: sessionStorage.getItem('search-user-item')
      ? JSON.parse(sessionStorage.getItem('search-user-item')!)
      : 0,
    initialPage: sessionStorage.getItem('search-user-page')
      ? JSON.parse(sessionStorage.getItem('search-user-page')!)
      : 0,
    key: 'search-user',
  });

  useRememberScroll({
    key: 'search-user',
    containerRef: profileRef,
    setList: setProfileList,
    list: profileList,
  });

  useEffect(() => {
    if (!profileData || profileData.length === 0) return;
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

  const [filter, setFilter] = useState<FilterData>({
    category: null,
    color: null,
    brand: null,
    isOpen: true,
    gender: {
      man: false,
      woman: false,
    },
  });

  const [sortStandard, setSortStandard] = useState<string>('LATEST');
  const [OOTDList, setOOTDList] = useState<OOTDListType[]>([]);

  const { getSearchOOTD } = OOTDApi();

  useEffect(() => {
    setFilter({
      category: null,
      color: null,
      brand: null,
      isOpen: true,
      gender: {
        man: false,
        woman: false,
      },
    });
  }, [keywordsValue]);

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
      writerGender: (() => {
        if (filter.gender?.man && filter.gender.woman) {
          return '';
        } else if (filter.gender?.man) {
          return 'MALE';
        } else if (filter.gender?.woman) {
          return 'FEMALE';
        } else {
          return '';
        }
      })(),
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
    total: OOTDTotal,
  } = useInfiniteScroll({
    fetchDataFunction: fetchOOTDDataFunction,
    size: 12,
    initialData: sessionStorage.getItem('search-ootd-item')
      ? JSON.parse(sessionStorage.getItem('search-ootd-item')!)
      : [],
    initialPage: sessionStorage.getItem('search-ootd-page')
      ? JSON.parse(sessionStorage.getItem('search-ootd-page')!)
      : 0,
    key: 'search-ootd',
  });

  useEffect(() => {
    if (OOTDData.length === 0) return;
    setOOTDList(
      OOTDData.map((item: any) => {
        return {
          id: item.id,
          imageUrl: item.imageUrl,
          imageCount: item.imageCount,
        };
      })
    );
  }, [OOTDData]);

  useEffectAfterMount(() => {
    setOOTDList([]);
    ootdReset();
  }, [keywordsValue, sortStandard]);

  const [firstState, setFirstState] = useState<number>(0);

  useEffectAfterMount(() => {
    setFirstState(firstState + 1);
    if (firstState > 0) {
      setOOTDList([]);
      ootdReset();
    }
  }, [filter]);

  const onChangeTabBarIndex = () => {
    const storedSearchType = sessionStorage.getItem('search-type');
    if (storedSearchType) {
      if (storedSearchType === 'ootd') {
        sessionStorage.setItem('search-type', 'user');
      } else {
        sessionStorage.setItem('search-type', 'ootd');
      }
      return;
    }
    sessionStorage.setItem('search-type', 'ootd');
  };

  return (
    <>
      <S.Layout>
        <TabView
          initialIndex={
            sessionStorage.getItem('search-type')
              ? Number(sessionStorage.getItem('search-type') === 'user') + 1
              : 1
          }
        >
          <TabView.TabBar
            tab={['OOTD', '프로필']}
            display="block"
            onChangeState={onChangeTabBarIndex}
          />
          <TabView.Tabs>
            <TabView.Tab>
              {OOTDList.length === 0 &&
              filter.brand === null &&
              filter.category === null &&
              filter.color === null &&
              filter.gender?.man === false &&
              filter.gender.woman === false ? (
                <EmptySearch />
              ) : (
                <ClosetCloth
                  OOTDTotal={OOTDTotal}
                  OOTDList={OOTDList}
                  setOOTDList={setOOTDList}
                  OOTDIsLoading={OOTDIsLoading}
                  OOTDRef={OOTDRef}
                  OOTDHasNextPage={OOTDHasNextPage}
                  filter={filter}
                  setFilter={setFilter}
                  sortStandard={sortStandard}
                  setSortStandard={setSortStandard}
                />
              )}
            </TabView.Tab>
            <TabView.Tab>
              {profileData.length > 0 ? (
                <Profile
                  profileList={profileList}
                  setProfileList={setProfileList}
                  profileIsLoading={profileIsLoading}
                  profileRef={profileRef}
                  profileHasNextPage={profileHasNextPage}
                />
              ) : (
                <EmptySearch />
              )}
            </TabView.Tab>
          </TabView.Tabs>
        </TabView>
      </S.Layout>
    </>
  );
}
