/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Title1 } from '@/components/UI';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <S.Layout>
      <Title1>{text}</Title1>
    </S.Layout>
  );
};

export default Header;
