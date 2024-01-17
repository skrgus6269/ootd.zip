export interface ClothInformationProps {
  clothId: number;
  clothImage: string;
  caption: string;
  size?: 'big' | 'small';
  headline: string;
  subHeadline?: string;
  bodyFirst: string;
  bodySecond?: string;
  icon?: string;
  state?: 'dark' | 'light';
  type?: 'view';
  className?: string;
  onClick?: () => void;
}
