import S from './style';
import Image, { StaticImageData } from 'next/image';
import { AiOutlineBell } from 'react-icons/ai';
import defaultUserProfile from 'public/images/defaultUserProfile.png';

interface ProfileLayoutProps {
  children: React.ReactNode;
  isUser: boolean;
  imgSrc: StaticImageData;
  isMine: boolean;
}

export default function ProfileLayout({
  children,
  isUser,
  imgSrc,
  isMine,
}: ProfileLayoutProps) {
  return (
    <S.Layout>
      <S.UserPhoto>
        {isUser && <Image src={imgSrc} alt="유저의 이미지" />}
        {!isUser && <Image src={defaultUserProfile} alt="유저의 이미지" />}
      </S.UserPhoto>
      <S.UserInfo>{children}</S.UserInfo>
      <S.Icon>{isMine && <AiOutlineBell />}</S.Icon>
    </S.Layout>
  );
}
