/* eslint-disable @next/next/no-img-element */
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Carousel from '../Carousel';
import { useRouter } from 'next/router';
import { ImageWithTag } from '../Domain/AddOOTD/TagModal';
import S from './style';
import NextButton from '../NextButton';
import { Body3, Body4 } from '../UI';

interface GalleryProps {
  setImageAndTag: Dispatch<SetStateAction<ImageWithTag | undefined | string>>;
  imageAndTag: ImageWithTag | string;
  nextStep: string;
  handleStep: (next: string) => void;
  item: string;
}

const Gallery = ({
  imageAndTag,
  setImageAndTag,
  handleStep,
  nextStep,
  item,
}: GalleryProps) => {
  const router = useRouter();

  const [images, setImages] = useState<ImageWithTag | undefined | string>([]);
  const [realTouch, setRealTouch] = useState<number>(100);

  useEffect(() => {
    if (!window.ReactNativeWebView) {
      return;
    }
    sendReactNativeMessage({ type: item });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setImages);
    }
  }, []);

  useEffect(() => {
    if (imageAndTag === '') {
      router.push('main');
      return;
    }
    if (item == 'Cloth') {
      handleStep(nextStep);
    }
  }, [imageAndTag]);

  const [selectedImage, setSelectedImage] = useState<ImageWithTag>([]);

  const onClickImage = (ootdId: number, ootdImage: string) => {
    if (ootdId !== realTouch) {
      setRealTouch(ootdId);

      const alive = selectedImage.filter(
        (item) => item.ootdId === ootdId
      ).length;

      if (!alive) {
        setRealTouch(ootdId);
        setSelectedImage([
          ...selectedImage,
          { ootdImage: ootdImage, ootdId: ootdId },
        ]);
      }
      return;
    }

    const newSelectedImage = selectedImage.filter((item, index) => {
      if (item.ootdId !== ootdId) {
        return item;
      }
    });
    if (selectedImage.length === 1) {
      setRealTouch(100);
    } else {
      setRealTouch(newSelectedImage[newSelectedImage.length - 1].ootdId);
    }

    setSelectedImage(newSelectedImage);
  };

  const onClickNextButton = () => {};

  return (
    <S.Layout>
      <S.Image>
        {selectedImage.length === 0 && (
          <img
            className="bigImage"
            src="https://ootdzip.s3.ap-northeast-2.amazonaws.com/d2ff5b49-cbe3-40b3-8aa6-62551b5f3917_2024-01-31.png"
            alt="basic"
          />
        )}
      </S.Image>
      {typeof images !== 'string' ? (
        selectedImage &&
        selectedImage.map((item, index) => {
          if (item.ootdId === realTouch)
            return (
              <S.Image key={index}>
                <img className="bigImage" src={item.ootdImage} alt="" />
              </S.Image>
            );
        })
      ) : (
        <img onClick={() => handleStep(nextStep)} src={images} alt="" />
      )}
      <S.ImageList imageListlength={images!.length}>
        <Body4 className="selected" state="emphasis">
          {selectedImage.length}장의 사진이 선택됨
        </Body4>
        <Carousel
          infinite={false}
          slidesToShow={images!.length <= 3 ? images!.length : 3.2}
        >
          {typeof images !== 'string' ? (
            images &&
            images.map((item, index) => {
              return (
                <S.Image key={index} state={item.ootdId === realTouch}>
                  <img
                    className="smallImage"
                    onClick={() => onClickImage(item.ootdId, item.ootdImage)}
                    src={item.ootdImage}
                    alt=""
                  />
                  {selectedImage.map((items, indexs) => {
                    return (
                      item.ootdId === items.ootdId && (
                        <S.ImageNumber state={true} key={indexs}>
                          {indexs + 1}
                        </S.ImageNumber>
                      )
                    );
                  })}
                </S.Image>
              );
            })
          ) : (
            <img onClick={() => handleStep(nextStep)} src={images} alt="" />
          )}
        </Carousel>
      </S.ImageList>
      <Body3 className="helperText">사진을 눌러 순서를 변경해보세요.</Body3>
      <NextButton
        className="nextButton"
        state={selectedImage.length > 0}
        onClick={onClickNextButton}
      >
        다음
      </NextButton>
    </S.Layout>
  );
};

export default Gallery;
