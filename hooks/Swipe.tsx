import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

function SwipeDetector(props: Props) {
  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);
  const [endY, setEndY] = useState<number | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    e.stopPropagation();
    setStartX(touch.clientX);
    setStartY(touch.clientY);
    setSwipeDirection(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === null || startY === null) {
      return;
    }
    e.stopPropagation();

    const touch = e.touches[0];

    setEndX(touch.clientX);
    setEndY(touch.clientY);

    const deltaX = endX! - startX!;
    const deltaY = endY! - startY!;

    // 스와이프 동작 판별
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (!deltaX) {
        setSwipeDirection(null);
      }
      if (endX === null) return;
      if (deltaX < -40) {
        setSwipeDirection(1); // 왼쪽 스와이프
      } else if (deltaX >= 40) {
        setSwipeDirection(2); // 오른쪽 스와이프
      }
    }
  };

  const handleTouchEnd = () => {
    if (swipeDirection === 1) {
      props.setState(1); // 왼쪽 스와이프 동작 처리
    } else if (swipeDirection === 2) {
      props.setState(2); // 오른쪽 스와이프 동작 처리
    }

    // 초기화
    setStartX(null);
    setStartY(null);
    setEndX(null);
    setEndY(null);
    setSwipeDirection(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transition: 'transform 0.3s ease', // 애니메이션 효과 적용
        transform: `translateX(${
          swipeDirection === 1 ? '-20%' : swipeDirection === 2 ? '20%' : '0'
        })`,
      }}
    >
      {props.children}
    </div>
  );
}

export default SwipeDetector;
