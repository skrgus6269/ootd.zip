import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface WithdrawAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function WithdrawAlert({
  onClickNoButton,
  onClickYesButton,
}: WithdrawAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline="정말 탈퇴하시겠습니까?"
      body={
        <>
          <Body3>탈퇴 버튼을 누르면 탈퇴가 완료됩니다.</Body3>
        </>
      }
      no={'취소'}
      yes={'탈퇴'}
      yesColor="error"
    />
  );
}
