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
      headline="북마크에서 삭제하시겠습니까?"
      body={
        <>
          <Body3>삭제를 누르면 해당 콘텐츠의 북마크가 해제됩니다.</Body3>
        </>
      }
      yes={'취소'}
      yesColor="error"
      no={'삭제'}
    />
  );
}
