import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SignInApi } from '@/apis/domain/SignIn/SignInApi';
import { RegisterApi } from '@/apis/domain/Register/RegisterApi';

interface QueryParams {
  code?: string;
  callback?: string[];
}

export default function SignUpCallbackPage() {
  const router = useRouter();
  const { code, callback } = router.query as QueryParams;
  const [login] = SignInApi();
  const { getCheckCompleteRegistUserInfo } = RegisterApi();

  useEffect(() => {
    const fetchData = async () => {
      if (callback !== undefined && code !== undefined) {
        // login 함수 호출 이후에 상태 확인
        const loginSuccess = await login({ platform: callback[0], code: code });

        // login 함수 호출 이후에 상태 확인 및 라우팅
        switch (loginSuccess) {
          case true:
            if (await getCheckCompleteRegistUserInfo()) router.replace('/main');
            else router.replace('/sign-up');
            break;
          case false:
            router.replace('../sign-in');
            break;
          default:
          // 상태가 정의되지 않은 경우에 대한 처리
        }
      }
    };

    fetchData();
  }, [code]);

  return <div>loading</div>;
}
