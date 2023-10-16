import Headline from '@/components/UI/TypoGraphy/Headline1';
import Subtitle from '@/components/UI/TypoGraphy/Subtitle1';

interface LabelSize {
  size: 'big' | 'small';
  children: React.ReactNode;
}

export default function Label({ size, children }: LabelSize) {
  return (
    <>
      {size === 'big' && <Headline>{children}</Headline>}
      {size === 'small' && <Subtitle>{children}</Subtitle>}
    </>
  );
}
