/* eslint-disable @next/next/no-img-element */
import { ImageWithTag } from '@/components/AddItem/TagModal';
import S from './style';
import { Body3, Headline1, Headline3 } from '@/components/UI';
import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import NextButton from '@/components/NextButton';

interface AdditionalInfo {
  clothImage: string | ImageWithTag | undefined;
  clothCategory: string;
  clothBrand: string;
  clothByName: string;
  setClothByName: Dispatch<SetStateAction<string>>;
  setClothMemo: Dispatch<SetStateAction<string>>;
  onClickSubmitButton: () => void;
  setClothBuyDate: Dispatch<SetStateAction<string>>;
}

export default function AdditionalInfo({
  clothImage,
  clothCategory,
  clothBrand,
  clothByName,
  setClothByName,
  setClothMemo,
  onClickSubmitButton,
  setClothBuyDate,
}: AdditionalInfo) {
  const [bigCategory, smallCategory] = clothCategory.split(',');

  const Category = () => {
    return (
      <S.Category>
        <Body3>{bigCategory}</Body3>
        <Body3>&gt;</Body3>
        <Body3 style={{ fontWeight: '700' }}>{smallCategory}</Body3>
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
          <Headline3>추가 정보</Headline3>
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
              input={clothByName}
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
