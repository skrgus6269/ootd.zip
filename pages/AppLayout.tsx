import styled from 'styled-components';
import React, { ReactNode } from 'react';
import BottomNavBar from '@/components/BottomNavBar';

const Layout = styled.div`
  height: 100%; //BottomNavBar를 아래로 보내기 위함
  display: flex;
  flex-direction: column;
`;

const MainComponent = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
`;

interface BottomNavBarProps {
  children: ReactNode;
}

const AppLayout = ({ children }: BottomNavBarProps) => {
  return (
    <Layout>
      <MainComponent>{children}</MainComponent>
      <BottomNavBar />
    </Layout>
  );
};

export type { BottomNavBarProps };
export default AppLayout;
