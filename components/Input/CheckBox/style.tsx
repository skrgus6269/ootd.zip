import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 16px;
  overflow: hidden;
`;

const Box = styled.div`
  width: 47.5%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Tag = styled.div``;

const Image = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = { Layout, Box, Tag, Image };

export default S;
