/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Body3, Headline1, Title1 } from '@/components/UI';
import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import NextButton from '@/components/NextButton';
import { ImageWithTag } from '@/components/Domain/AddOOTD/TagModal';
import { CategoryListType } from '@/components/Domain/AddCloth/ClothCategoryModal';

interface AdditionalInfo {
  clothImage: string | ImageWithTag | undefined;
  clothCategory: CategoryListType[] | null;
  clothBrand: string;
  clothByName: string;
  clothMemo: string;
  setClothByName: Dispatch<SetStateAction<string>>;
  setClothMemo: Dispatch<SetStateAction<string>>;
  setClothBuyDate: Dispatch<SetStateAction<string>>;
  onClickSubmitButton: () => void;
}

export default function AdditionalInfo({
  clothImage,
  clothCategory,
  clothBrand,
  clothByName,
  clothMemo,
  setClothByName,
  setClothMemo,
  onClickSubmitButton,
  setClothBuyDate,
}: AdditionalInfo) {
  const Category = () => {
    return (
      <S.Category>
        <Body3>{clothCategory![0].name}</Body3>
        <Body3>&gt;</Body3>
        <Body3 style={{ fontWeight: '700' }}>
          {clothCategory![0]!.detailCategories![0].name}
        </Body3>
      </S.Category>
    );
  };

  return (
    <S.Layout>
      <S.BasicInfoFirst>
        <Category />
        <Headline1>{clothBrand}</Headline1>
        {typeof clothImage === 'string' && <img src={clothImage} alt="" />}
        <hr />
      </S.BasicInfoFirst>
      <S.AdditionalInfo>
        <S.Title>
          <Title1 className="title">추가 정보</Title1>
        </S.Title>
        <S.Information>
          <Input>
            <Input.Label size="small" className="label">
              별칭
            </Input.Label>
            <Input.Text
              size="big"
              placeholder=""
              border={true}
              onChange={setClothByName}
              line="outline"
            />
          </Input>
          <Input>
            <Input.Label size="small" className="label">
              구매시기
            </Input.Label>
            <Input.Text
              size="big"
              placeholder=""
              border={true}
              onChange={setClothBuyDate}
              line="outline"
            />
          </Input>
          <Input>
            <Input.Label size="small" className="label">
              메모
            </Input.Label>
            <Input.TextArea
              input={clothMemo}
              setInput={setClothMemo}
              placeholder="메모를 입력해주세요"
            />
          </Input>
        </S.Information>
      </S.AdditionalInfo>
      <NextButton
        state={true}
        onClick={onClickSubmitButton}
        className="nextButton"
      >
        등록하기
      </NextButton>
    </S.Layout>
  );
}
