import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface BlockAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function BlockAlert({
  onClickNoButton,
  onClickYesButton,
}: BlockAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline={<Title1>차단이 해제되었습니다.</Title1>}
      body={
        <>
          <Body3>팔로우하시겠습니까?</Body3>
          <Body3>닫기를 누르면 이전 화면으로 돌아갑니다.</Body3>
        </>
      }
      yes={'팔로우'}
      no={'닫기'}
    />
  );
}
