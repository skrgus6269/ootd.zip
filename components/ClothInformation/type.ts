export interface ClothInformationProps {
  itemImage: string;
  caption: string;
  size?: 'big' | 'small';
  Headline?: string;
  SubHeadline?: string;
  BodyFirst?: string;
  BodySecond?: string;
  icon?: React.ReactNode;
  state?: 'dark' | 'light';
}
