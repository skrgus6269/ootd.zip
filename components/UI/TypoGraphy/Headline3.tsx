import styled from 'styled-components';

const Headline = styled.h3`
  font-family: 'Pretendard-SemiBold';
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.md}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Headline;
