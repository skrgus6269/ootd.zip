import { systemService } from '@/apis/_service';
import { postReportPayload } from '@/apis/_api/type';

export default function ReportApi() {
  // 신고 항목 가져오기
  const getReport = async () => {
    const { result } = await systemService.getReport();

    return result;
  };

  // 신고
  const postReport = async (payload: postReportPayload) => {
    try {
      const { statusCode } = await systemService.postReport(payload);

      if (statusCode === 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getReport,
    postReport,
  };
}
