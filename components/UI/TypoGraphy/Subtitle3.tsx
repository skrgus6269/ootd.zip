import styled from 'styled-components';

const Subtitle = styled.h5`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.base}; //16px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0
`;

export default Subtitle;
