import ProfileLayout from '../ProfileLayout';
import S from './style';
import Title1 from '@/components/UI/TypoGraphy/Title1';
import { ProfileType } from '../type';
import { Body4 } from '@/components/UI';
import { useRouter } from 'next/router';

export default function OtherProfile({
  isUser,
  userImage,
  userName,
  follow,
  myCloth,
  className,
  showingId,
}: ProfileType) {
  const router = useRouter();

  return (
    <ProfileLayout
      isUser={isUser}
      imgSrc={userImage}
      isMine={false}
      className={className}
    >
      <S.Layout>
        <S.Name>
          <Title1>{userName}</Title1>
        </S.Name>
        <S.Info onClick={() => router.push(`/followList/${showingId}`)}>
          <Body4>팔로우</Body4>
          <Body4 state="emphasis">{follow}</Body4>
          <Body4>명</Body4>
          <p className="dot">•</p>
          <Body4>팔로잉</Body4>
          <Body4 state="emphasis">{myCloth}</Body4>
          <Body4>명</Body4>
        </S.Info>
      </S.Layout>
    </ProfileLayout>
  );
}
