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
    <S.Layout onClick={onClickReportButton}>
      <Modal className="modal" isOpen={reportModalIsopen} height="10">
        <S.Report>
          <Button1 className="report">신고</Button1>
        </S.Report>
      </Modal>
    </S.Layout>
  );
}
