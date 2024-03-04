import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TabView from '@/components/TabView';
import ClothCategory from '@/components/ClothCategory';
import ColorList, { ColorListType } from '@/components/ColorList';
import { Body4, Button3 } from '@/components/UI';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '@/components/Button';
import { BrandType } from '@/components/BrandList/Brand';
import { FilterData } from '../ClosetCloth';
import BrandList from '@/components/BrandList';
import { CategoryListType } from '@/components/Domain/AddCloth/ClothCategoryModal';
import ClothApi from '@/apis/domain/Cloth/ClothApi';

interface FilterModalProps {
  isOpen: Boolean;
  setFilterModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  categoryInitital: CategoryListType[] | null;
  colorInitital: ColorListType | null;
  brandInitial: BrandType[] | null;
  setFilter: Dispatch<SetStateAction<FilterData>>;
}

export default function FilterModal({
  isOpen,
  setFilterModalIsOpen,
  setFilter,
  categoryInitital,
  colorInitital,
  brandInitial,
}: FilterModalProps) {
  const [selectedColorList, setSelectedColorList] =
    useState<ColorListType | null>(null);

  const [selectedBrand, setSelectedBrand] = useState<BrandType[] | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    CategoryListType[] | null
  >(null);

  const [categoryList, setCategoryList] = useState<CategoryListType[] | null>(
    null
  );

  const [colorList, setColorList] = useState<ColorListType>([]);

  const [brandList, setBrandList] = useState<BrandType[] | null>([
    { id: 0, name: '나이키', state: false },
    { id: 1, name: '아디다스', state: false },
    { id: 2, name: '퓨마', state: false },
    { id: 3, name: '조던', state: false },
  ]);

  const onClickSubmitButton = () => {
    setFilter({
      category: selectedCategory,
      color: selectedColorList,
      brand: selectedBrand,
      isOpen: null,
    });
    setFilterModalIsOpen(false);
  };

  const onClickInitButton = () => {
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSelectedColorList(null);
  };

  const onClickCloseCategoryButton = (
    categoryId: number,
    type: 'big' | 'small'
  ) => {
    let newCategoryList = [] as CategoryListType[] | undefined;
    if (type === 'big') {
      newCategoryList = categoryList?.map((item) => {
        if (item.id === categoryId) {
          return { ...item, state: false };
        }
        return item;
      });
    } else {
      newCategoryList = categoryList?.map((item) => {
        return {
          ...item,
          detailCategories: item.detailCategories!.map((items) => {
            if (items.id === categoryId) return { ...items, state: false };
            return items;
          }),
        };
      });
    }
    setCategoryList(newCategoryList ? newCategoryList : null);
  };

  const onClickCloseColorButton = (colorId: number) => {
    const newColorList = colorList.map((item) => {
      if (item.id === colorId) {
        return { ...item, state: false };
      }
      return item;
    });

    setColorList(newColorList!);
  };

  const onClickCloseBrandButton = (brandId: number) => {
    const newBrandList = brandList!.map((item) => {
      if (item.id === brandId) {
        return { ...item, state: false };
      }
      return item;
    });

    setBrandList(newBrandList);
  };

  return (
    <Modal isOpen={isOpen} height="65">
      <S.Layout>
        <TabView>
          <TabView.TabBar tab={['카테고리', '색상', '브랜드']} />
          <div className="main">
            <TabView.Tabs>
              <TabView.Tab>
                <ClothCategory
                  type="many"
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  setSelectedCategory={setSelectedCategory}
                  categoryInitital={categoryInitital}
                />
              </TabView.Tab>
              <TabView.Tab>
                <ColorList
                  setSelectedColorList={setSelectedColorList}
                  className="colorList"
                  colorList={colorList}
                  colorInitital={colorInitital}
                  setColorList={setColorList}
                />
              </TabView.Tab>
              <TabView.Tab>
                <Body4 className="top" state="emphasis">
                  {brandList
                    ? `총${brandList!.length}개의 브랜드`
                    : `총 0개의 브랜드`}
                </Body4>
                <BrandList
                  many="many"
                  brandList={brandList}
                  setBrandList={setBrandList}
                  brandInitial={brandInitial}
                  setSelectedBrand={setSelectedBrand}
                />
              </TabView.Tab>
            </TabView.Tabs>
          </div>
        </TabView>
        {
          <S.SelectedFilter
            state={
              (selectedCategory !== null && selectedCategory.length !== 0) ||
              (selectedBrand !== null && selectedBrand.length !== 0) ||
              (selectedColorList !== null && selectedColorList.length !== 0)
            }
          >
            {selectedCategory?.map((item, index) => {
              return (
                <S.SelectedFilterSpan key={index}>
                  {!item.state ? (
                    <Button3>{item.detailCategories![0].name}</Button3>
                  ) : (
                    <Button3>{item.name}</Button3>
                  )}
                  <AiOutlineClose
                    onClick={() =>
                      onClickCloseCategoryButton(
                        item.state ? item.id : item.detailCategories![0].id,
                        item.state ? 'big' : 'small'
                      )
                    }
                    className="close"
                  />
                </S.SelectedFilterSpan>
              );
            })}
            {selectedColorList?.map((item, index) => {
              return (
                <S.SelectedFilterSpan key={index}>
                  <Button3>{item.name}</Button3>
                  <AiOutlineClose
                    onClick={() => onClickCloseColorButton(item.id)}
                    className="close"
                  />
                </S.SelectedFilterSpan>
              );
            })}
            {selectedBrand?.map((item, index) => {
              return (
                <S.SelectedFilterSpan key={index}>
                  <Button3>{item.name}</Button3>
                  <AiOutlineClose
                    onClick={() => onClickCloseBrandButton(item.id)}
                    className="close"
                  />
                </S.SelectedFilterSpan>
              );
            })}
          </S.SelectedFilter>
        }
        <S.SelectedButton
          state={
            (selectedCategory !== null && selectedCategory.length > 0) ||
            (selectedColorList !== null && selectedColorList.length > 0) ||
            (selectedBrand !== null && selectedBrand.length > 0)
          }
        >
          <Button
            className="init"
            size="big"
            onClick={onClickInitButton}
            color="grey_40"
            backgroundColor="grey_100"
            border={false}
          >
            <Button3>초기화</Button3>
          </Button>
          <Button
            className="submit"
            size="big"
            onClick={onClickSubmitButton}
            color="grey_100"
            backgroundColor="grey_90"
            border={false}
          >
            <Button3>완료</Button3>
          </Button>
        </S.SelectedButton>
      </S.Layout>
    </Modal>
  );
}
