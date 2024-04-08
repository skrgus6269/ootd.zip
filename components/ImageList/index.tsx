import Image from 'next/image';
import NextImage from '../NextImage';
import S from './style';
import More from '@/public/images/More.png';

interface ImageListProps {
  data: {
    clothId?: number;
    clothImage?: string;
    ootdId?: number;
    ootdImage?: string;
    ootdImageCount?: number;
  }[];
  onClick?: (index: number) => void;
  type: 'row' | 'column';
}

export default function ImageList({ data, onClick, type }: ImageListProps) {
  return (
    <S.Layout type={type}>
      {data.map((item, index) => {
        if (item.clothId !== undefined) {
          return (
            <S.Image key={index}>
              <NextImage
                onClick={() => (onClick ? onClick(item.clothId!) : '')}
                src={item.clothImage!}
                alt=""
                fill={true}
              />
            </S.Image>
          );
        }
        if (item.ootdId !== undefined) {
          return (
            <S.Image key={index}>
              <NextImage
                onClick={() => (onClick ? onClick(item.ootdId!) : '')}
                key={index}
                src={item.ootdImage!}
                alt=""
                fill={true}
              />
              {item.ootdImageCount! > 1 && (
                <Image
                  fill={false}
                  src={More}
                  alt="More"
                  className="moreIcon"
                  width={14}
                  height={14}
                />
              )}
            </S.Image>
          );
        }
      })}
    </S.Layout>
  );
}
