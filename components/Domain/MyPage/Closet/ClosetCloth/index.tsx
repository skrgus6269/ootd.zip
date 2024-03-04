import { Body4, Caption2 } from '@/components/UI';
import S from './style';
import { useEffect, useState } from 'react';
import ImageList from '@/components/ImageList';
import { useRouter } from 'next/router';
import { AiOutlineDown } from 'react-icons/ai';
import FilterModal from '../FilterModal';
import { ColorListType } from '@/components/ColorList';
import { CategoryListType } from '@/components/Domain/AddCloth/ClothCategoryModal';
import { BrandType } from '@/components/BrandList/Brand';

interface ClosetClothProps {
  myPageClothList?: myPageClothType[];
}

export type myPageClothType = {
  clothId: number;
  clothImage: string;
};

export interface FilterData {
  category: CategoryListType[] | null;
  color: ColorListType | null;
  brand: BrandType[] | null;
  isOpen: Boolean | null;
}

export default function ClosetCloth({ myPageClothList }: ClosetClothProps) {
  const router = useRouter();

  const [filterModalIsOpen, setFilterModalIsOpen] = useState<Boolean>(false);

  const [filter, setFilter] = useState<FilterData>({
    category: null,
    color: null,
    brand: null,
    isOpen: null,
  });

  const [searchResult, setSearchResult] = useState(myPageClothList);

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
      isOpen: null,
    });
  };

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
              (filter.category !== null && filter.category.length !== 0) ||
              (filter.brand !== null && filter.brand.length !== 0) ||
              (filter.color !== null && filter.color.length !== 0)
            }
            onClick={onClickInitButton}
          >
            <Body4 state="emphasis">초기화</Body4>
          </S.Span>
          <S.Span
            state={filter.isOpen === true}
            onClick={() => setFilter({ ...filter, isOpen: true })}
          >
            <Body4 state="emphasis">공개</Body4>
          </S.Span>
          <S.Span
            state={filter.isOpen === false}
            onClick={() => setFilter({ ...filter, isOpen: false })}
          >
            <Body4 state="emphasis">비공개</Body4>
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
          setFilter={setFilter}
        />
      )}
    </>
  );
}
