/* eslint-disable @next/next/no-img-element */
import AppBar from '@/components/Appbar';
import StyleModal from '@/components/Domain/AddOOTD/StyleModal';
import { ImageWithTag } from '@/components/Domain/AddOOTD/TagModal';
import Input from '@/components/Input';
import NextButton from '@/components/NextButton';
import { Body4, Button3, Title1 } from '@/components/UI';
import S from '@/pageStyle/edit-ootd/style';
import { useEffect, useState } from 'react';
import {
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlinePlus,
} from 'react-icons/ai';
import { Style } from '../add-ootd';
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import { useRouter } from 'next/router';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';

const EditOOTD: ComponentWithLayout = () => {
  const [imageAndTag, setImageAndTag] = useState<ImageWithTag | undefined>(
    undefined
  );
  const [contents, setContents] = useState<string>('');
  const [styleModalIsOpen, setStyleModalIsOpen] = useState<Boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<Style[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const router = useRouter();

  const { getOOTDDetail, putOOTD } = OOTDApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const result = await getOOTDDetail(Number(router.query.OOTDNumber![0]));
      setImageAndTag(result.ootdImages);
      setContents(result.contents);
      setSelectedStyle(result.styles);
      setIsOpen(!result.private);
    };
    fetchData();
  }, [router.isReady]);

  const onClickAddStyleTag = () => {
    setStyleModalIsOpen(true);
  };

  const onClickStyleTag = (index: number) => {
    const sampleSelectedStyleTag = [...selectedStyle];
    sampleSelectedStyleTag.splice(index, 1);
    setSelectedStyle(sampleSelectedStyleTag);
  };

  const onClickCloseImage = (index: number) => {
    if (imageAndTag && imageAndTag.length > 1) {
      let newImageAndTag = JSON.parse(
        JSON.stringify(imageAndTag)
      ) as ImageWithTag;
      newImageAndTag.splice(index, 1);
      setImageAndTag(newImageAndTag);
    }
  };

  const onClickSubmitButton = async () => {
    console.log(imageAndTag);

    if (imageAndTag !== undefined) {
      const payload = {
        id: Number(router.query!.OOTDNumber![0]),
        content: contents,
        styles: selectedStyle.map((item) => item.id),
        ootdImages: imageAndTag.map((item) => {
          return {
            ootdImage: item.ootdImage,
            clothesTags: item.ootdImageClothesList?.map((items) => {
              return {
                clothesId: items.clothesId,
                deviceWidth: items.deviceSize?.deviceWidth,
                deviceHeight: items.deviceSize?.deviceHeight,
                xrate: items.coordinate?.xrate,
                yrate: items.coordinate?.yrate,
              };
            }),
          };
        }),
        isPrivate: !isOpen,
      };
      const editOOTDSuccess = await putOOTD(
        Number(router.query.OOTDNumber![0]),
        payload
      );

      //edit ootd 성공 여부에 따른 페이지 이동
      if (editOOTDSuccess) {
        router.push(`/ootd/${Number(router.query.OOTDNumber![0])}`);
      } else {
        alert('등록 실패');
      }
    }
  };

  return (
    <>
      <S.Background
        isOpen={styleModalIsOpen}
        onClick={() => setStyleModalIsOpen(false)}
      />
      <AppBar
        leftProps={<></>}
        middleProps={<Title1>수정하기</Title1>}
        rightProps={<Button3 style={{ color: 'red' }}>취소</Button3>}
      />
      <S.Layout>
        <Body4 className="selectedPhoto" state="emphasis">
          {imageAndTag !== undefined && imageAndTag?.length}장의 사진이 선택됨
        </Body4>
        <S.OOTDImage>
          {imageAndTag &&
            imageAndTag.map((item, index) => {
              return (
                <div className="image" key={index}>
                  <img src={item.ootdImage} alt="" />
                  <AiFillCloseCircle
                    onClick={() => onClickCloseImage(index)}
                    className="close"
                  />
                </div>
              );
            })}
        </S.OOTDImage>
        <S.ImageDivider />
        <S.Text>
          <Input>
            <Input.TextArea
              input={contents}
              setInput={setContents}
              placeholder="OOTD에 대해 설명해주세요."
            />
          </Input>
        </S.Text>
        <S.Style>
          <Title1>스타일태그</Title1>
          <AiOutlinePlus onClick={onClickAddStyleTag} />
        </S.Style>
        <S.StyleList>
          {selectedStyle?.length > 0 &&
            selectedStyle?.map((item, index) => {
              return (
                <S.StyleListSpan
                  onClick={() => onClickStyleTag(index)}
                  key={index}
                >
                  <Button3 className="selectedStyleList">{item.name}</Button3>
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
              state={isOpen}
              setState={setIsOpen}
            />
          </Input>
        </S.Open>
        <NextButton
          className="nextButon"
          state={true}
          onClick={onClickSubmitButton}
        >
          저장
        </NextButton>
      </S.Layout>

      {styleModalIsOpen && (
        <StyleModal
          setStyleModalIsOpen={setStyleModalIsOpen}
          styleModalIsOpen={styleModalIsOpen}
          setSelectedStyle={setSelectedStyle}
          styleInitial={selectedStyle}
        />
      )}
    </>
  );
};

export default EditOOTD;

EditOOTD.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

EditOOTD.Layout.displayName = 'EditOOTDLayout';
