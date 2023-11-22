/* eslint-disable @next/next/no-img-element */
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { ImageWithTag } from '../AddItem/TagModal';
import Carousel from '../Carousel';

interface GalleryProps {
  setImageAndTag: Dispatch<SetStateAction<ImageWithTag | undefined>>;
  imageAndTag: ImageWithTag;
  handleStep: (next: string) => void;
}

const Gallery = ({ imageAndTag, setImageAndTag, handleStep }: GalleryProps) => {
  useEffect(() => {
    if (!window.ReactNativeWebView) {
      return;
    }
    sendReactNativeMessage({ type: 'galleryList' });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setImageAndTag);
    }
  }, []);

  return (
    <Carousel infinite={false} slidesToShow={1}>
      {imageAndTag &&
        imageAndTag.map((item, index) => {
          return (
            <img
              onClick={() => handleStep('의류태그')}
              style={{ width: '101px' }}
              key={index}
              src={item.ootdImage}
              alt=""
            />
          );
        })}
    </Carousel>
  );
};

export default Gallery;
