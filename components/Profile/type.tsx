import { StaticImageData } from 'next/image';

interface ProfileType {
  isUser: boolean;
  userImage?: StaticImageData;
  userName?: string;
  follow?: string;
  myCloth?: string;
}

export type { ProfileType };
