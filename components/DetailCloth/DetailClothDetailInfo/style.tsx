import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 16px 20px 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const InfoTitle = styled.div`
  display: flex;
  width: 65px;
  padding: 8px;
  align-items: center;
  gap: 8px;
`;

const ColorList = styled.div`
  display: flex;
  padding: 8px 8px 8px 4px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const ColorSpanLayout = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: 'row';
  align-items: center;
  justify-content: center;
`;

interface ColorSpanProps {
  bgColor: string;
}

const ColorSpan = styled.div<ColorSpanProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

const ColorName = styled.div``;

const S = {
  Layout,
  Category,
  InfoTitle,
  ColorList,
  ColorSpanLayout,
  ColorSpan,
  ColorName,
};

export default S;
