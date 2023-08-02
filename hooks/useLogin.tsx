import { authService } from '@/service';
import { setCookie } from '@/utils/Cookie';

export const useLogin = () => {
  const getAccessToken = async () => {
    // 액세스 토큰을 받는다.
    const accessToken = await authService.login();

    // 쿠키에 담아준다.
    setCookie('accessToken', accessToken, {
      path: '/',
      // 보안 설정은 배포 직전에 설정해주기
    });
    getAccessToken();
  };
};
