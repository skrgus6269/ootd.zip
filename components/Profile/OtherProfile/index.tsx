import ProfileLayout from '../ProfileLayout';
import S from './style';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import Body from '@/components/UI/TypoGraphy/Body4';
import { ProfileType } from '../type';

export default function OtherProfile({
  isUser,
  userImage,
  userName,
  follow,
  myCloth,
}: ProfileType) {
  return (
    <ProfileLayout isUser={isUser} imgSrc={userImage!} isMine={false}>
      <S.Layout>
        <S.Name>
          <Headline>{userName}</Headline>
        </S.Name>
        <S.Info>
          <Body>
            팔로우 {follow}명 • 옷장 {myCloth}벌 {'>'}
          </Body>
        </S.Info>
      </S.Layout>
    </ProfileLayout>
  );
}
