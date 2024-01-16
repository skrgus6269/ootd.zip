import Modal from '@/components/Modal';
import S from './style';
import { Button1 } from '@/components/UI';
import { Dispatch, SetStateAction } from 'react';

interface ReportModalProps {
  reportModalIsopen: Boolean;
  setReportModalIsopen: Dispatch<SetStateAction<Boolean>>;
}

export default function ReportModal({
  reportModalIsopen,
  setReportModalIsopen,
}: ReportModalProps) {
  const onClickReportButton = () => {
    setReportModalIsopen(false);
  };

  return (
    <Modal isOpen={reportModalIsopen} height="10%">
      <S.Layout onClick={onClickReportButton}>
        <Button1 className="report">신고</Button1>
      </S.Layout>
    </Modal>
  );
}
