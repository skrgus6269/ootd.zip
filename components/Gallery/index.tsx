/* eslint-disable @next/next/no-img-element */
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { ImageWithTag } from '../AddItem/TagModal';
import Carousel from '../Carousel';

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
  useEffect(() => {
    if (!window.ReactNativeWebView) {
      return;
    }
    sendReactNativeMessage({ type: item });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setImageAndTag);
    }
  }, []);

  useEffect(() => {
    if (item === 'Cloth') {
      handleStep(nextStep);
    }
  }, [imageAndTag]);

  return (
    <Carousel infinite={false} slidesToShow={1}>
      {typeof imageAndTag !== 'string' ? (
        imageAndTag &&
        imageAndTag.map((item, index) => {
          return (
            <img
              onClick={() => handleStep(nextStep)}
              style={{ width: '101px' }}
              key={index}
              src={item.ootdImage}
              alt=""
            />
          );
        })
      ) : (
        <img
          onClick={() => handleStep(nextStep)}
          style={{ width: '101px' }}
          src={imageAndTag}
          alt=""
        />
      )}
    </Carousel>
  );
};

export default Gallery;
