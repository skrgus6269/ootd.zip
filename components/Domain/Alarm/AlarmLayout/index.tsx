import React from 'react';
import S from './style';

interface AlarmLayoutProps {
  children: React.ReactNode;
  index: number;
}

export default function AlarmLayout({ children, index }: AlarmLayoutProps) {
  return <S.Layout index={index}>{children}</S.Layout>;
}
