import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface BookmarkAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function BookmarkAlert({
  onClickNoButton,
  onClickYesButton,
}: BookmarkAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline={<Title1>북마크에서 삭제하시겠습니까?</Title1>}
      body={
        <>
          <Body3>삭제냐 안 삭제냐 그것이 문제로다</Body3>
        </>
      }
      yes={'취소'}
      no={'삭제'}
    />
  );
}
