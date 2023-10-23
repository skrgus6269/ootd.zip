import { StaticImageData } from 'next/image';

interface ProfileType {
  isUser: Boolean;
  userImage?: StaticImageData;
  userName?: string;
  follow?: number;
  myCloth?: number;
}

export type { ProfileType };
