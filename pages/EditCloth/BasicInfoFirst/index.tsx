/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Input from '@/components/Input';
import ClothCategoryModal from '@/components/AddCloth/ClothCategoryModal';
import { Body3, Title1 } from '@/components/UI';
import NextButton from '@/components/NextButton';
import { ImageWithTag } from '@/components/AddItem/TagModal';
import WhereToBuyModal from '@/components/AddCloth/WhereToBuyModal';
import { ClothWhereBuy } from '..';
import Header from '@/components/Header';

interface BaiscInfoFirst {
  clothImage: string | ImageWithTag | undefined;
  clothCategory: string;
  clothBrand: string;
  clothWhereBuy: ClothWhereBuy;
  setClothCategory: Dispatch<SetStateAction<string>>;
  setClothBrand: Dispatch<SetStateAction<string>>;
  setClothWhereBuy: Dispatch<SetStateAction<ClothWhereBuy>>;
  handleStep: (next: string) => void;
}

export default function BasicInfoFirst({
  clothImage,
  clothCategory,
  clothBrand,
  clothWhereBuy,
  setClothCategory,
  setClothBrand,
  setClothWhereBuy,
  handleStep,
}: BaiscInfoFirst) {
  const [categoryModalOpen, setCategoryModalOpen] = useState<Boolean>(false);
  const [bigCategory, smallCategory] = clothCategory.split(',');
  const [nextButtonState, setNextButtonState] = useState<Boolean>(false);
  const [init, setInit] = useState<number>(0);
  const [inits, setInits] = useState<number>(0);

  const [whereToBuyModalOpen, setWhereToBuyModalOpen] =
    useState<Boolean>(false);

  useEffect(() => {
    // mock 데이터
    setClothCategory('상의, 후디');
    setClothBrand('브랜드');
    setClothWhereBuy({
      letter: '구매하는 곳',
      type: 'write',
    });
  }, []);

  useEffect(() => {
    console.log(clothWhereBuy);
  }, [clothWhereBuy]);

  useEffect(() => {
    if (
      clothCategory.length > 1 &&
      clothBrand.length > 0 &&
      clothWhereBuy.letter.length > 0
    ) {
      setNextButtonState(true);
      return;
    }
    setNextButtonState(false);
  }, [clothCategory, clothBrand, clothWhereBuy]);

  const Category = bigCategory && (
    <S.Category>
      <Body3>{bigCategory}</Body3>
      <Body3>&gt;</Body3>
      <Body3 style={{ fontWeight: '700' }}>{smallCategory}</Body3>
    </S.Category>
  );

  const WhereToBuy = <Body3>{clothWhereBuy.letter}</Body3>;

  const onClickNextButton = () => {
    handleStep('기본정보2');
    console.log(clothCategory, clothImage, clothWhereBuy, clothBrand);
  };

  useEffect(() => {
    if (clothCategory) brandRef.current.focus();
  }, [clothCategory]);

  const brandRef = useRef<any>(null);
  const nameRef = useRef<any>(null);

  const onClickBackground = () => {
    if (categoryModalOpen) setCategoryModalOpen(false);
    if (whereToBuyModalOpen) setWhereToBuyModalOpen(false);
  };
  return (
    <>
      <S.Background
        isOpen={categoryModalOpen || whereToBuyModalOpen}
        onClick={onClickBackground}
      />
      <S.Layout>
        <S.ClothImage>
          {typeof clothImage === 'string' && <img src={clothImage} alt="" />}
        </S.ClothImage>
        <Header text="기본 정보" />
        <S.BasicInfo>
          <S.Information>
            <Input>
              <Input.Label size="small">카테고리</Input.Label>
              <Input.Modal
                state={clothCategory.length > 0}
                result={Category}
                setModalOpen={setCategoryModalOpen}
                setInit={setInit}
              />
            </Input>
            <Input>
              <Input.Label size="small">브랜드</Input.Label>
              <Input.Text
                defaultValue={clothBrand}
                inputRef={brandRef}
                size="big"
                placeholder=""
                border={true}
                onChange={setClothBrand}
                line="outline"
                pressEnter={() => nameRef.current.focus()}
              />
            </Input>
            <Input>
              <Input.Label size="small">구매처</Input.Label>
              {clothWhereBuy ? (
                <Input.Modal
                  result={WhereToBuy}
                  setModalOpen={setWhereToBuyModalOpen}
                  state={clothWhereBuy.letter.length > 0}
                  setInit={setInits}
                  type={clothWhereBuy.type}
                />
              ) : (
                <Input.Modal
                  result={WhereToBuy}
                  setModalOpen={setWhereToBuyModalOpen}
                  state={true}
                  setInit={setInits}
                />
              )}
            </Input>
          </S.Information>
        </S.BasicInfo>
      </S.Layout>
      {init > 0 && (
        <ClothCategoryModal
          storedClothCategory={clothCategory}
          isOpen={categoryModalOpen}
          setIsOpen={setCategoryModalOpen}
          setClothCategory={setClothCategory}
        />
      )}
      {inits > 0 && (
        <WhereToBuyModal
          storedClothWhereBuy={clothWhereBuy}
          isOpen={whereToBuyModalOpen}
          setIsOpen={setWhereToBuyModalOpen}
          setWhereToBuy={setClothWhereBuy}
        />
      )}
    </>
  );
}
