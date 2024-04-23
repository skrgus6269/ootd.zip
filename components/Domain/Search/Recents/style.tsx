import styled from 'styled-components';

const Layout = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 20px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CaptionText = styled.div`
  color: ${(props) => props.theme.color.grey_50};
`;

const Keywords = styled.div`
  display: flex;
  padding: 16px 0px 8px 0px;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  padding: 8px 11px 8px 16px;
  flex-shrink: 0;
  border-radius: 17px;
  background-color: ${(props) => props.theme.color.grey_10};
  color: ${(props) => props.theme.color.grey_100};
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  height: 36px;
  max-width: 171px;

  .tagName {
    max-width: 120px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const S = {
  Layout,
  Menu,
  CaptionText,
  Keywords,
  Chip,
};

export default S;
