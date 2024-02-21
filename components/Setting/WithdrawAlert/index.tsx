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
      headline={<Title1>정말 탈퇴하시겠습니까?</Title1>}
      body={
        <>
          <Body3>탈퇴 버튼을 누르면 탈퇴가 완료됩니다.</Body3>
        </>
      }
      yes={'취소'}
      no={'탈퇴'}
    />
  );
}
