import { Body4, Caption2 } from '@/components/UI';
import S from './style';
import { useEffect, useState } from 'react';
import ImageList from '@/components/ImageList';
import { useRouter } from 'next/router';
import { AiOutlineDown } from 'react-icons/ai';
import FilterModal from '../FilterModal';
import { ColorListType } from '@/components/ColorList';
import SubHead from '@/components/DetailCloth/SubHead';
import { CategoryType } from '@/components/Domain/AddCloth/ClothCategoryModal';
import { BrandType } from '@/components/BrandList/Brand';

interface ClosetClothProps {
  searchClothList?: searchClothType[];
}

export type searchClothType = {
  clothId: number;
  clothImage: string;
};

export type GenderTypes = {
  man: Boolean;
  woman: Boolean;
};

export interface FilterData {
  category: CategoryType[] | null;
  color: ColorListType | null;
  brand: BrandType[] | null;
  gender: GenderTypes;
}

export default function ClosetCloth({ searchClothList }: ClosetClothProps) {
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

  const [searchResult, setSearchResult] = useState(searchClothList);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const onClickImageList = (index: number) => {
    router.push(`/OOTD/${index}`);
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

  const [clicked, setClicked] = useState<string>('오래된 순');

  return (
    <>
      <S.Background
        isOpen={filterModalIsOpen}
        onClick={() => setFilterModalIsOpen(false)}
      />
      <S.Layout>
        <S.SearchFilter>
          <S.Span onClick={onClickInitButton}>
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
          setState={setClicked}
          state={clicked}
          count={searchClothList?.length || 0}
          style="noPadding"
        />
        <S.ClothList>
          <ImageList
            onClick={onClickImageList}
            data={searchResult!}
            type={'column'}
          />
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
