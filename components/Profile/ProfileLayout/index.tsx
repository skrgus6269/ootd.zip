/* eslint-disable @next/next/no-img-element */
import S from './style';
import { AiOutlineBell } from 'react-icons/ai';

interface ProfileLayoutProps {
  children: React.ReactNode;
  isUser: Boolean;
  imgSrc: string;
  isMine: Boolean;
  className?: string;
}

export default function ProfileLayout({
  children,
  isUser,
  imgSrc,
  isMine,
  className,
}: ProfileLayoutProps) {
  return (
    <S.Layout className={className}>
      <S.UserPhoto>
        {isUser && <img src={imgSrc} alt="유저의 이미지" />}
      </S.UserPhoto>
      <S.UserInfo>{children}</S.UserInfo>
      <S.Icon>{isMine && <AiOutlineBell />}</S.Icon>
    </S.Layout>
  );
}
