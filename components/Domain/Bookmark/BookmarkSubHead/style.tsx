import styled from 'styled-components';

interface LayoutProps {
  state?: string;
}

const headLayout = styled.div<LayoutProps>`
  display: flex;
  padding: 12px 20px;
  justify-content: flex-end;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

const S = { headLayout, Frame, Wrap };

export default S;
