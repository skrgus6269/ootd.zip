import ErrorLayout from '@/components/MyErrorBoundary/ErrorLayout';
import { Body3 } from '@/components/UI';

export default function Error404() {
  return (
    <ErrorLayout
      headline="없는 페이지입니다."
      body={
        <>
          <Body3>존재하지 않는 페이지입니다.</Body3>
        </>
      }
      resetErrorBoundary={() => console.log('')}
    />
  );
}
