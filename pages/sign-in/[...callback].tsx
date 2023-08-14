import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLogin } from '@/hooks/useLogin';

interface QueryParams {
  code?: string;
  callback?: string[];
}

export default function SignUpCallbackPage() {
  const router = useRouter();
  const { code: kakaoCode, callback } = router.query as QueryParams;
  const [state, login] = useLogin();

  useEffect(() => {
    (async () => {
      if (callback !== undefined && kakaoCode !== undefined) {
        await login!({ platform: callback[0], code: kakaoCode });

        //로그인 성공 여부에 따른 라우팅 분기처리
        switch (state) {
          case true:
            router.push('../onboarding');
            break;
          case false:
            router.push('../sign-up');
        }
      }
    })();
  }, [callback, kakaoCode, login, router, state]);

  return <div>loading</div>;
}
