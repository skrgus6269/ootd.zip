import ProfileLayout from '../ProfileLayout';
import S from './style';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import Body from '@/components/UI/TypoGraphy/Body4';
import Subtitle from '@/components/UI/TypoGraphy/Subtitle1';
import { ProfileType } from '../type';

export default function MyProfile({
  isUser,
  userImage,
  userName,
  follow,
  myCloth,
}: ProfileType) {
  //유저인 경우
  const User = () => {
    return (
      <S.Layout>
        <S.Name>
          <Headline>{userName}</Headline>
        </S.Name>
        <S.Info>
          <Body>
            팔로우 {follow}명 • 내 옷장 {myCloth}벌 {'>'}
          </Body>
        </S.Info>
      </S.Layout>
    );
  };

  //유저가 아닌경우
  const Guest = () => {
    return (
      <S.NeedLogin>
        <Subtitle>로그인이 필요한 서비스입니다.</Subtitle>
      </S.NeedLogin>
    );
  };

  return (
    <ProfileLayout isUser={isUser} imgSrc={userImage!} isMine={true}>
      {isUser && <User />}
      {!isUser && <Guest />}
    </ProfileLayout>
  );
}
