import { ImageProps } from '@/components/Card/type';
import { ImageCaption, ImageFigure } from './style';
import Image from 'next/image';

export default function ImageWithCaption(props: ImageProps) {
  return (
    <ImageFigure size={props.size}>
      <Image src={props.src} alt={props.alt} fill />
      <ImageCaption size={props.size}>{props.caption}</ImageCaption>
    </ImageFigure>
  );
}
