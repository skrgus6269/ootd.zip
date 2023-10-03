import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useEffect } from 'react';
import { useTabViewContext } from '@/hooks/use-tabview/context';

interface TabsProps {
  children: React.ReactNode;
}

export default function Tabs({ children }: TabsProps) {
  const { index, setIndex } = useTabViewContext();

  const afterChangeHandler = (currentIndex: number) => {
    setIndex(currentIndex + 1);
  };

  const sliderSettings = {
    speed: 400,
    infinite: false, //무한 슬라이드 false
    afterChange: afterChangeHandler, //변경 후 처리할 함수
  };

  //슬라이더의 ref
  const ref = useRef<Slider | null>(null);

  //인덱스가 변경될 시 그 인덱스에 해당하는 슬라이드로 이동
  useEffect(() => {
    const slider = ref.current;
    if (slider) {
      slider.slickGoTo(index - 1);
    }
  }, [index]);

  return (
    <div>
      <Slider ref={ref} {...sliderSettings}>
        {children}
      </Slider>
    </div>
  );
}
