import { Body4, Caption2 } from '@/components/UI';
import S from './style';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import ImageList from '@/components/ImageList';
import { useRouter } from 'next/router';
import { AiOutlineDown } from 'react-icons/ai';
import FilterModal from '../FilterModal';
import { ColorListType } from '@/components/ColorList';
import SubHead from '../SubHead';
import { CategoryListType } from '@/components/Domain/AddCloth/ClothCategoryModal';
import { BrandType } from '@/components/BrandList/Brand';
import Spinner from '@/components/Spinner';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';

interface ClosetClothProps {
  keywordsValue: string;
}

export type OOTDListType = {
  id: number;
  imageUrl: string;
};

export type GenderTypes = {
  man: Boolean;
  woman: Boolean;
};

export interface FilterData {
  category: CategoryListType[] | null;
  color: ColorListType | null;
  brand: BrandType[] | null;
  gender: GenderTypes;
}

export default function ClosetCloth({ keywordsValue }: ClosetClothProps) {
  const router = useRouter();

  const [filterModalIsOpen, setFilterModalIsOpen] = useState<Boolean>(false);
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
  const [OOTDList, setOOTDList] = useState<OOTDListType[]>([]);

  const { getSearchOOTD } = OOTDApi();

  const onClickImageList = (index: number) => {
    router.push(`/ootd/${index}`);
  };

  const onClickFilterSpan = () => {
    setFilterModalIsOpen(true);
  };

  const onClickInitButton = () => {
    setFilter({
      category: null,
      color: null,
      brand: null,
      gender: {
        man: false,
        woman: false,
      },
    });
  };

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
      <S.Background
        isOpen={filterModalIsOpen}
        onClick={() => setFilterModalIsOpen(false)}
      />
      <S.Layout>
        <S.SearchFilter>
          <S.Span
            state={
              !!(
                filter?.category?.length ||
                filter?.brand?.length ||
                filter?.color?.length
              )
            }
            onClick={onClickInitButton}
          >
            <Body4 state="emphasis">초기화</Body4>
          </S.Span>
          <S.Span
            state={filter.gender.man}
            onClick={() =>
              setFilter({
                ...filter,
                gender: { ...filter.gender, man: !filter.gender.man },
              })
            }
          >
            <Body4 state="emphasis">남성</Body4>
          </S.Span>
          <S.Span
            state={filter.gender.woman}
            onClick={() =>
              setFilter({
                ...filter,
                gender: { ...filter.gender, woman: !filter.gender.woman },
              })
            }
          >
            <Body4 state="emphasis">여성</Body4>
          </S.Span>
          <S.Divider />
          <S.FilterSpan
            onClick={onClickFilterSpan}
            state={filter.category !== null}
          >
            <Body4 state="emphasis">카테고리</Body4>
            {filter.category !== null && (
              <Caption2 className="counter">{filter.category.length}</Caption2>
            )}
            <AiOutlineDown className="down" />
          </S.FilterSpan>
          <S.FilterSpan
            state={filter.color !== null && filter.color.length > 0}
            onClick={onClickFilterSpan}
          >
            <Body4 state="emphasis">색상</Body4>
            <AiOutlineDown className="down" />
            {filter.color !== null && filter.color.length > 0 && (
              <Caption2 className="counter">{filter.color.length}</Caption2>
            )}
          </S.FilterSpan>
          <S.FilterSpan
            state={filter.brand !== null && filter.brand.length > 0}
            onClick={onClickFilterSpan}
          >
            <Body4 state="emphasis">브랜드</Body4>
            <AiOutlineDown className="down" />
            {filter.brand !== null && filter.brand.length > 0 && (
              <Caption2 className="counter">{filter.brand.length}</Caption2>
            )}
          </S.FilterSpan>
        </S.SearchFilter>
        <SubHead
          setState={setSortStandard}
          state={sortStandard}
          count={OOTDList?.length || 0}
          style="noPadding"
        />
        <S.ClothList ref={OOTDRef}>
          <ImageList
            onClick={onClickImageList}
            data={OOTDList.map((item) => {
              return { ootdId: item.id, ootdImage: item.imageUrl };
            })}
            type={'column'}
          />
          {OOTDIsLoading && OOTDHasNextPage && <Spinner />}
        </S.ClothList>
      </S.Layout>
      {filterModalIsOpen && (
        <FilterModal
          isOpen={filterModalIsOpen}
          setFilterModalIsOpen={setFilterModalIsOpen}
          categoryInitital={filter.category}
          colorInitital={filter.color}
          brandInitial={filter.brand}
          genderInitial={filter.gender}
          setFilter={setFilter}
        />
      )}
    </>
  );
}
