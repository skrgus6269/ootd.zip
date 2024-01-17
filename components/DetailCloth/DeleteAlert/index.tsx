import Alert from '@/components/Alert';
import { Body3, Headline3 } from '@/components/UI';

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
      headline={<Headline3>옷장에서 옷을 삭제하시겠습니까?</Headline3>}
      body={
        <>
          <Body3>확인을 누르시면 옷장에서 옷이 삭제되며 다시</Body3>
          <Body3>복구할 수 없습니다.</Body3>
        </>
      }
      yes={'확인'}
      no={'취소'}
    />
  );
}
