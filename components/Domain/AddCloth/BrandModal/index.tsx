import Modal from '@/components/Modal';
import S from './style';
import { Button3, Title1 } from '@/components/UI';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BrandList from '@/components/BrandList';
import { BrandType } from '@/components/BrandList/Brand';
import SearchBar from '@/components/SearchBar';
import { AiOutlineClose } from 'react-icons/ai';
import NextButton from '@/components/NextButton';
import ClothApi from '@/apis/domain/Cloth/ClothApi';

interface BrandModalProps {
  brandModalIsOpen: Boolean;
  setBrandModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  setClothBrand: Dispatch<SetStateAction<BrandType[] | null>>;
}

export default function BrandModal({
  brandModalIsOpen,
  setBrandModalIsOpen,
  setClothBrand,
}: BrandModalProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [brandList, setBrandList] = useState<BrandType[] | null>(null);
  const [selectedBrandList, setSelectedBrandList] = useState<
    BrandType[] | null
  >(null);

  const { getBrand } = ClothApi();

  const onClickCloseBrandButton = (id: number) => {
    const newBrandList = brandList!.map((item) => {
      if (item.id === id) {
        return { ...item, state: false };
      }
      return item;
    });

    setBrandList(newBrandList);
  };

  const onClickNextButton = () => {
    setClothBrand(selectedBrandList);
    setBrandModalIsOpen(false);
  };

  useEffect(() => {
    const fetchBrand = async () => {
      const result = await getBrand(searchKeyword);
      setBrandList(result);
    };
    if (searchKeyword === '') setBrandList(null);
    if (searchKeyword.length > 0) fetchBrand();
  }, [searchKeyword]);

  return (
    <Modal isOpen={brandModalIsOpen} height="90">
      <S.Layout>
        <S.Title>
          <Title1 className="title">브랜드</Title1>
          <AiOutlineClose
            onClick={() => setBrandModalIsOpen(false)}
            className="close"
          />
        </S.Title>
        <S.Search>
          <SearchBar
            placeholder="검색"
            letter={searchKeyword}
            setLetter={setSearchKeyword}
          />
        </S.Search>
        <S.BrandList>
          <BrandList
            brandInitial={null}
            brandList={brandList}
            setBrandList={setBrandList}
            setSelectedBrand={setSelectedBrandList}
            keyword={searchKeyword.length > 0 ? searchKeyword : undefined}
            many="one"
          />
        </S.BrandList>
        <S.SelectedBrand>
          {selectedBrandList &&
            selectedBrandList.map((item, index) => {
              return (
                <S.SelectedBrandSpan key={index}>
                  <Button3>{item.name}</Button3>
                  <AiOutlineClose
                    onClick={() => onClickCloseBrandButton(item.id)}
                    className="close"
                  />
                </S.SelectedBrandSpan>
              );
            })}
        </S.SelectedBrand>
        <NextButton
          className="nextButton"
          state={selectedBrandList !== null && selectedBrandList.length > 0}
          onClick={onClickNextButton}
        >
          완료
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
