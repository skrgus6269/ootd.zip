import styled from 'styled-components';
import React, { ReactNode } from 'react';
import BottomNavBar from '@/components/BottomNavBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { BottomNavbarPlusButtonState } from './utils/recoil/atom';
import AddModal from './components/BottomNavBar/AddModal';

const Layout = styled.div`
  height: 100%; //BottomNavBar를 아래로 보내기 위함
  display: flex;
  flex-direction: column;
`;

const MainComponent = styled.div`
  height: calc(100vh - 56px);
`;

interface BackgroundProps {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 56px);
  position: fixed;
`;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [addModalState, setAddModalState] = useRecoilState(
    BottomNavbarPlusButtonState
  );
  return (
    <Layout>
      <MainComponent>
        <Background
          onClick={() => setAddModalState(false)}
          isOpen={addModalState}
        />
        {children}
        {addModalState && <AddModal />}
      </MainComponent>
      <BottomNavBar />
    </Layout>
  );
};

export type { AppLayoutProps };
export default AppLayout;
