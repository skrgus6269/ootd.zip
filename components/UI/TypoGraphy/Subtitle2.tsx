import styled from 'styled-components';

const Subtitle = styled.h5`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0
`;

export default Subtitle;
