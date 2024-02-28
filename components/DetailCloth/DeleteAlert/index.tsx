import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface DeleteAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function DeleteAlert({
  onClickNoButton,
  onClickYesButton,
}: DeleteAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline={<Title1>옷장에서 옷을 삭제하시겠습니까?</Title1>}
      body={
        <>
          <Body3>확인을 누르시면 옷장에서 옷이 삭제되며 다시</Body3>
          <Body3>복구할 수 없습니다.</Body3>
        </>
      }
      yes={'할래'}
      no={'안할래'}
    />
  );
}
