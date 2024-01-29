import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Brand, { BrandType } from '../Brand';
import S from './style';

interface BrandListProps {
  brandInitial: BrandType[] | null;
  setSelectedBrand: Dispatch<SetStateAction<BrandType[] | null>>;
  brandList: BrandType[] | null;
  setBrandList: Dispatch<SetStateAction<BrandType[] | null>>;
}

export default function BrandList({
  brandList,
  setBrandList,
  setSelectedBrand,
  brandInitial,
}: BrandListProps) {
  // const [getUserBrand] = useCloth();

  useEffect(() => {
    if (brandList) {
      const newBrandList = [...brandList];

      if (brandInitial)
        for (let i = 0; i < brandInitial?.length; i++) {
          for (let j = 0; j < newBrandList.length; j++) {
            if (brandInitial[i].brandId === newBrandList[j].brandId) {
              newBrandList[j].state = true;
            }
          }
        }
      setBrandList(newBrandList);
    }
  }, []);

  const onClickBrandList = (index: number) => {
    const newBrandList = [...brandList!];

    newBrandList[index] = {
      ...newBrandList![index],
      state: !newBrandList![index].state,
    };
    setBrandList(newBrandList);
  };

  useEffect(() => {
    if (brandList) {
      const newBrandList = [...brandList]
        .filter((item) => item.state)
        .map((item) => {
          return {
            brandId: item.brandId,
            korean: item.korean,
            english: item.english,
          };
        });
      setSelectedBrand(newBrandList);
    }
  }, [brandList]);

  return (
    <S.Layout>
      {brandList?.map((item, index) => {
        return (
          <Brand
            key={index}
            korean={item.korean}
            english={item.english}
            onClickBrandList={onClickBrandList}
            onClickIndex={index}
            state={item.state}
          />
        );
      })}
    </S.Layout>
  );
}
