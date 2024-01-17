/* eslint-disable @next/next/no-img-element */
import S from './style';

interface ImageListProps {
  data: {
    imageId?: number;
    image: string;
  }[];
  onClick?: (index: number) => void;
  type: 'row' | 'column';
}

export default function ImageList({ data, onClick, type }: ImageListProps) {
  return (
    <S.Layout type={type}>
      {data.map((item, index) => {
        if (item.imageId && onClick) {
          return (
            <img
              onClick={() => onClick(item.imageId!)}
              key={index}
              src={item.image}
              alt=""
            />
          );
        }
        return <img key={index} src={item.image} alt="" />;
      })}
    </S.Layout>
  );
}
