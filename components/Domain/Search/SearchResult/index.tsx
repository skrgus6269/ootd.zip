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
    size: 9,
    initialData: [],
  });

  useEffect(() => {
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
  }, [keywordsValue, sortStandard, filter]);

  return (
    <>
      <S.Layout>
        <TabView>
          <TabView.TabBar tab={['OOTD', '프로필']} display="block" />
          <TabView.Tabs>
            <TabView.Tab>
              {OOTDData.length > 0 ? (
                <ClosetCloth
                  OOTDTotal={OOTDTotal}
                  OOTDList={OOTDList}
                  OOTDIsLoading={OOTDIsLoading}
                  OOTDRef={OOTDRef}
                  OOTDHasNextPage={OOTDHasNextPage}
                  filter={filter}
                  setFilter={setFilter}
                  sortStandard={sortStandard}
                  setSortStandard={setSortStandard}
                />
              ) : (
                <EmptySearch />
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
