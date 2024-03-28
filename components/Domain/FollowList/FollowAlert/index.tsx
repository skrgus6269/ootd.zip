import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface FollowAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function FollowAlert({
  onClickNoButton,
  onClickYesButton,
}: FollowAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline="팔로워에서 삭제하시겠습니까?"
      body={
        <>
          <Body3>Username님은 회원님의 팔로워 리스트에</Body3>
          <Body3>서 삭제된 것을 알 수 없습니다.</Body3>
        </>
      }
      yes={'삭제'}
      yesColor="error"
      no={'닫기'}
    />
  );
}
