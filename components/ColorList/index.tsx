import { Dispatch, SetStateAction, useEffect, useLayoutEffect } from 'react';
import S from './style';
import ColorSpan from '../ColorSpan';

export type ColorListType = {
  colorId: number;
  color: string;
  name: string;
  state: Boolean;
}[];

interface ColorListProps {
  colorList: ColorListType;
  setColorList: Dispatch<SetStateAction<ColorListType>>;
  selectedColorList: ColorListType | null;
  setSelectedColorList: Dispatch<SetStateAction<ColorListType | null>>;
  colorInitital: ColorListType | null;
  className?: string;
}

export default function ColorList({
  setSelectedColorList,
  colorInitital,
  className,
  selectedColorList,
  colorList,
  setColorList,
}: ColorListProps) {
  //const [getColor] = useSystem();

  useEffect(() => {
    const newColorList = [...colorList];
    if (colorInitital)
      for (let i = 0; i < colorInitital?.length; i++) {
        for (let j = 0; j < newColorList.length; j++) {
          if (colorInitital[i].colorId === newColorList[j].colorId) {
            newColorList[j].state = true;
          }
        }
      }
    setColorList(newColorList);
  }, []);

  useLayoutEffect(() => {
    const selectedColor = colorList.filter((item) => item.state);

    setSelectedColorList(selectedColor);
  }, [colorList]);

  const onClickColorSpan = (index: number) => {
    setColorList((prevColorList) => {
      return prevColorList.map((item, i) =>
        i === index ? { ...item, state: !item.state } : item
      );
    });
  };

  return (
    <S.Layout>
      <S.ColorList className={className}>
        {colorList.map((item, index) => {
          return (
            <ColorSpan
              color={item.color}
              name={item.name}
              state={item.state}
              key={index}
              index={index}
              onClick={() => onClickColorSpan(index)}
            />
          );
        })}
      </S.ColorList>
    </S.Layout>
  );
}
