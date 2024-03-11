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
      const { result } = await systemService.postReport(payload);
      console.log(result);

      return result;
    } catch (err) {
      return err;
    }
  };

  return {
    getReport,
    postReport,
  };
}
