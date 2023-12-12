/* eslint-disable @next/next/no-img-element */
import { Body2, Body3, Headline1, Headline3 } from '@/components/UI';
import S from './style';
import { ImageWithTag } from '@/components/AddItem/TagModal';
import { Dispatch, SetStateAction, useState } from 'react';
import Input from '@/components/Input';
import NextButton from '@/components/NextButton';
import { ClothColor, ClothWhereBuy } from '..';
import PlusButton from '@/components/PlusButton';
import ColorModal from '@/components/AddCloth/ColorModal';
import ColorSpan from '@/components/ColorSpan';
import ClothSizeModal from '@/components/AddCloth/ClothSizeModal';
import Alert from '@/components/Alert';
import AddClothAlert from '@/components/AddCloth/AddClothAlert';

interface BasicInfoSecondProps {
  clothImage: string | ImageWithTag | undefined;
  clothCategory: string;
  clothBrand: string;
  clothWhereBuy: ClothWhereBuy;
  handleStep: (next: string) => void;
  clothColor: ClothColor;
  setClothColor: Dispatch<SetStateAction<ClothColor>>;
  clothSize: string;
  setClothSize: Dispatch<SetStateAction<string>>;
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
}

export default function BasicInfoSecond({
  clothCategory,
  clothBrand,
  clothWhereBuy,
  clothImage,
  clothColor,
  setClothColor,
  clothSize,
  setClothSize,
  open,
  setOpen,
  handleStep,
}: BasicInfoSecondProps) {
  const [colorModalOpen, setColorModalOpen] = useState<Boolean>(false);
  const [sizeModalOpen, setSizeModalOpen] = useState<Boolean>(false);
  const [init, setInit] = useState<number>(0);
  const [inits, setInits] = useState<number>(0);
  const [bigCategory, smallCategory] = clothCategory.split(',');
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  const Category = () => {
    return (
      <S.Category>
        <Body3>{bigCategory}</Body3>
        <Body3>&gt;</Body3>
        <Body3 style={{ fontWeight: '700' }}>{smallCategory}</Body3>
      </S.Category>
    );
  };

  const Size = (
    <S.Size>
      <Body3>{clothSize}</Body3>
    </S.Size>
  );

  const onClickBackground = () => {
    if (colorModalOpen) setColorModalOpen(false);
    if (sizeModalOpen) setSizeModalOpen(false);
    if (alertOpen) setAlertOpen(false);
  };

  const onClickNextButton = () => {
    setAlertOpen(true);
  };

  const onClickColorPlusButton = () => {
    setColorModalOpen(true);
    setInit(1);
  };

  const onClickYesButton = () => {
    handleStep('추가정보');
  };

  const onClickNoButton = () => {
    //옷 등록 api
    alert(
      `${bigCategory}, ${smallCategory}, ${clothBrand}, ${clothColor}, ${clothImage}, ${clothWhereBuy}, ${open}`
    );
  };

  return (
    <>
      <S.Background
        isOpen={colorModalOpen || sizeModalOpen || alertOpen}
        onClick={onClickBackground}
      />
      <S.Layout>
        <S.BasicInfoFirst>
          <Category />
          <Headline1>{clothBrand}</Headline1>
          <Body2 className="name">{clothWhereBuy.letter}</Body2>
          {typeof clothImage === 'string' && <img src={clothImage} alt="" />}
          <hr />
        </S.BasicInfoFirst>
        <S.BasicInfoSecond>
          <S.Title>
            <Headline3>기본 정보</Headline3>
          </S.Title>
          <S.Information>
            <Input>
              <Input.Label size="small" className="label">
                색상
              </Input.Label>
              <S.ClothColorSpanList>
                {clothColor.length > 0 &&
                  clothColor.map((item, index) => {
                    return (
                      <ColorSpan
                        key={index}
                        index={index}
                        color={item.color}
                        name={item.name}
                        state={false}
                      />
                    );
                  })}
                <PlusButton onClickPlusButton={onClickColorPlusButton} />
              </S.ClothColorSpanList>
            </Input>

            <Input>
              <Input.Label size="small" className="label">
                사이즈
              </Input.Label>
              <Input.Modal
                result={Size}
                setModalOpen={setSizeModalOpen}
                state={clothSize.length > 0}
                setInit={setInits}
              />
            </Input>
            <Input>
              <Input.Label size="small" className="label">
                공개 여부
              </Input.Label>
              <Input.TrueFalse
                left="공개"
                right="비공개"
                state="공개"
                setState={setOpen}
              />
              <Input.HelperText state={1}>
                공개로 설정하면 다른사람과 아이템을 공유할 수 있어요.
              </Input.HelperText>
            </Input>
          </S.Information>
        </S.BasicInfoSecond>
        <NextButton
          state={clothColor.length > 0 && clothSize.length > 0}
          onClick={onClickNextButton}
          className="nextButton"
        >
          등록하기
        </NextButton>
      </S.Layout>
      {init && (
        <ColorModal
          setIsOpen={setColorModalOpen}
          setClothColor={setClothColor}
          isOpen={colorModalOpen}
        />
      )}
      {inits && (
        <ClothSizeModal
          setIsOpen={setSizeModalOpen}
          setClothSize={setClothSize}
          isOpen={sizeModalOpen}
          bigCategory={bigCategory}
        />
      )}
      {alertOpen && (
        <AddClothAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )}
    </>
  );
}
