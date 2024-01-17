/* eslint-disable @next/next/no-img-element */
import Input from '@/components/Input';
import S from './style';
import { Dispatch, SetStateAction, useState } from 'react';
import { ImageWithTag } from '@/components/AddItem/TagModal';
import { Body4, Button1, Button3, Title1 } from '@/components/UI';
import { AiOutlinePlus } from 'react-icons/ai';
import StyleModal from '@/components/AddItem/StyleModal';
import { Style } from '..';
import { AiOutlineClose } from 'react-icons/ai';

interface WriteOOTDProps {
  imageAndTag: ImageWithTag | string;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  string: string;
  setString: Dispatch<SetStateAction<string>>;
  style: Style[];
  setStyle: Dispatch<SetStateAction<Style[]>>;
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
  selectedStyle: string[];
  setSelectedStyle: Dispatch<SetStateAction<string[]>>;
}

export default function WriteOOTD({
  imageAndTag,
  gender,
  setGender,
  string,
  setString,
  style,
  setStyle,
  open,
  setOpen,
  selectedStyle,
  setSelectedStyle,
}: WriteOOTDProps) {
  const [addTag, setAddTag] = useState<Boolean>(false);
  const genderArray = ['남성', '여성', '선택 안 함'];
  const [init, setInit] = useState<Boolean>(false); // 초기 addTag 렌더링 방지

  const onClickAddStyleTag = () => {
    setAddTag(true);
    setInit(true);
  };

  const onClickStyleTag = (index: number) => {
    const sampleSelectedStyleTag = [...selectedStyle];
    sampleSelectedStyleTag.splice(index, 1);
    setSelectedStyle(sampleSelectedStyleTag);
  };

  return (
    <>
      <S.Layout>
        <Body4 state="emphasis">{imageAndTag.length}장의 사진이 선택됨</Body4>
        <S.OOTDImage>
          {typeof imageAndTag !== 'string' &&
            imageAndTag.map((item, index) => {
              return <img src={item.ootdImage} key={index} alt="" />;
            })}
        </S.OOTDImage>
        <S.ImageDivider />
        <S.Text>
          <Input>
            <Input.TextArea
              input={string}
              setInput={setString}
              placeholder="OOTD에 대해 설명해주세요."
            />
          </Input>
        </S.Text>
        <S.Gender>
          <Title1>성별</Title1>
          <S.GenderList>
            {genderArray.map((item, index) => {
              return (
                <S.GenderListSpan
                  onClick={() => setGender(item)}
                  state={item === gender}
                  key={index}
                >
                  <Button1>{item}</Button1>
                </S.GenderListSpan>
              );
            })}
          </S.GenderList>
        </S.Gender>
        <S.Style>
          <Title1>스타일태그</Title1>
          <AiOutlinePlus onClick={onClickAddStyleTag} />
        </S.Style>
        <S.StyleList>
          {selectedStyle.map((item, index) => {
            return (
              <S.StyleListSpan
                onClick={() => onClickStyleTag(index)}
                key={index}
              >
                <Button3>{item}</Button3>
                <AiOutlineClose />
              </S.StyleListSpan>
            );
          })}
        </S.StyleList>
        <S.Open>
          <Title1>공개여부</Title1>
          <Input>
            <Input.TrueFalse
              left="공개"
              right="비공개"
              state={open}
              setState={setOpen}
            />
          </Input>
        </S.Open>
      </S.Layout>

      {init && (
        <StyleModal
          setAddTag={setAddTag}
          addTag={addTag}
          style={style}
          setStyle={setStyle}
          setSelectedStyle={setSelectedStyle}
        />
      )}
    </>
  );
}
