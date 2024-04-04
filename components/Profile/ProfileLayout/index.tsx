import S from './style';
import { AiOutlineBell } from 'react-icons/ai';
import Avatar from '@/public/images/Avatar.svg';
import NextImage from '@/components/NextImage';

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
        {imgSrc === '' ? (
          <Avatar className="userImage" />
        ) : (
          <NextImage
            fill={false}
            width={64}
            height={64}
            src={imgSrc}
            alt="유저 이미지"
            className="userImage"
          />
        )}
      </S.UserPhoto>
      <S.UserInfo>{children}</S.UserInfo>
      <S.Icon>{isMine && <AiOutlineBell />}</S.Icon>
    </S.Layout>
  );
}
