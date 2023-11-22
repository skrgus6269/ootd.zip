export interface ClothInformationProps {
  clothImage: string;
  caption: string;
  size?: 'big' | 'small';
  headline: string;
  subHeadline?: string;
  bodyFirst: string;
  bodySecond?: string;
  icon?: React.ReactNode;
  state?: 'dark' | 'light';
  className?: string;
}
