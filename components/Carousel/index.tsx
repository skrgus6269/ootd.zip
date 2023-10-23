import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface CarouselProps {
  children: React.ReactNode;
  slidesToShow: number;
  infinite: Boolean;
  ParentRef?: React.MutableRefObject<Slider | null>;
  afterChange?: (currentIndex: number) => void;
}

export default function Carousel({
  children,
  slidesToShow,
  ParentRef,
  infinite,
  afterChange,
}: CarouselProps) {
  const sliderSettings = {
    speed: 400,
    infinite: infinite as boolean, //무한 슬라이드 true,
    slidesToShow: slidesToShow,
    afterChange: afterChange,
  };

  return (
    <Slider ref={ParentRef} {...sliderSettings}>
      {children}
    </Slider>
  );
}
