import { ImageProps } from '@/components/Card/type';
import { ImageCaption, ImageFigure } from './style';
import Image from 'next/image';
import { Caption2 } from '../TypoGraphy';

export default function ImageWithCaption(props: ImageProps) {
  return (
    <ImageFigure size={props.size}>
      <Image onClick={props.onClick} src={props.src} alt={props.alt} fill />
      {props.caption !== '' && (
        <ImageCaption size={props.size}>
          <Caption2 className="caption">{props.caption}</Caption2>
        </ImageCaption>
      )}
    </ImageFigure>
  );
}
