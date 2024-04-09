import Alert from '@/components/Alert';
import { Body3 } from '@/components/UI';

interface FollowAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
  userName: string;
}

export default function FollowAlert({
  onClickNoButton,
  onClickYesButton,
  userName,
}: FollowAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline={`${userName}님을 차단하시겠습니까?`}
      body={
        <>
          <Body3>차단을 누를 경우 낙현바보님의 프로필 및</Body3>
          <Body3>게시물(댓글)이 표시되지 않습니다. 낙현바</Body3>
          <Body3>보님은 차단된 사실을 알 수 없습니다.</Body3>
        </>
      }
      yes={'차단'}
      yesColor="error"
      no={'닫기'}
    />
  );
}
