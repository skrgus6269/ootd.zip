import { Body3, Caption1 } from '@/components/UI';
import S from './style';

interface FollowTabbarProps {
  followerNumber: number;
  followingNumber: number;
  handleStep: (next: string) => void;
  currentStep: string;
}

export default function FollowTabbar({
  followerNumber,
  followingNumber,
  handleStep,
  currentStep,
}: FollowTabbarProps) {
  return (
    <S.Layout>
      <S.Follower onClick={() => handleStep('팔로워')}>
        <Body3 state="emphasis">{followerNumber}</Body3>
        <Caption1>팔로워</Caption1>
        {currentStep === '팔로워' && <S.Hr />}
      </S.Follower>
      <S.Following onClick={() => handleStep('팔로잉')}>
        <Body3 state="emphasis">{followingNumber}</Body3>
        <Caption1>팔로잉</Caption1>
        {currentStep === '팔로잉' && <S.Hr />}
      </S.Following>
    </S.Layout>
  );
}
