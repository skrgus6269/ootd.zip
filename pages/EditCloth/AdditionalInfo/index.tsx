/* eslint-disable @next/next/no-img-element */
import { ImageWithTag } from '@/components/AddItem/TagModal';
import S from './style';
import { Body3, Headline1, Title1 } from '@/components/UI';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Header from '@/components/Header';

interface AdditionalInfo {
  clothImage: string | ImageWithTag | undefined;
  clothByName: string;
  clothBuyDate: string;
  clothMemo: string;
  setClothByName: Dispatch<SetStateAction<string>>;
  setClothMemo: Dispatch<SetStateAction<string>>;
  onClickSubmitButton: () => void;
  setClothBuyDate: Dispatch<SetStateAction<string>>;
}

export default function AdditionalInfo({
  clothImage,
  clothByName,
  clothBuyDate,
  clothMemo,
  setClothByName,
  setClothMemo,
  onClickSubmitButton,
  setClothBuyDate,
}: AdditionalInfo) {
  const onClickPrevButton = () => {
    // handleStep('추가정보');
  };

  const onClickCompleteButton = () => {};

  useEffect(() => {
    setClothByName('23년 유니폼');
    setClothBuyDate('2023년 2월');
    setClothMemo('메모메모메메모메메모메메메메모메메메모모메메모');
  }, []);

  // const [bigCategory, smallCategory] = clothCategory.split(',');

  // const Category = () => {
  //   return (
  //     <S.Category>
  //       <Body3>{bigCategory}</Body3>
  //       <Body3>&gt;</Body3>
  //       <Body3 style={{ fontWeight: '700' }}>{smallCategory}</Body3>
  //     </S.Category>
  //   );
  // };

  return (
    <S.Layout>
      <S.BasicInfoFirst>
        {/* <Category /> */}
        {/* <Headline1>{clothBrand}</Headline1> */}
        {typeof clothImage === 'string' && <img src={clothImage} alt="" />}
        <hr />
      </S.BasicInfoFirst>
      <Header text="추가 정보" />
      <S.AdditionalInfo>
        <S.Information>
          <Input>
            <Input.Label size="small" className="label">
              별칭
            </Input.Label>
            <Input.Text
              defaultValue={clothByName}
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
              defaultValue={clothBuyDate}
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
      <Input>
        <Input.PrevNext
          left="이전"
          right="완료"
          leftButtonOnClick={onClickPrevButton}
          rightButtonOnClick={onClickCompleteButton}
        />
      </Input>
    </S.Layout>
  );
}
