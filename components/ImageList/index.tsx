/* eslint-disable @next/next/no-img-element */
import S from './style';

interface ImageListProps {
  data: {
    clothId?: number;
    clothImage?: string;
    ootdId?: number;
    ootdImage?: string;
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
            <img
              onClick={() => (onClick ? onClick(item.clothId!) : '')}
              key={index}
              src={item.clothImage!}
              alt=""
            />
          );
        }
        if (item.ootdId !== undefined) {
          return (
            <img
              onClick={() => (onClick ? onClick(item.ootdId!) : '')}
              key={index}
              src={item.ootdImage!}
              alt=""
            />
          );
        }
      })}
    </S.Layout>
  );
}
