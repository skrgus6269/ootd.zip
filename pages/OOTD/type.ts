export interface OOTDType {
  id: number;
  contents: string; //본문
  viewCount: number; //조회수
  reportCount: number; //신고 횟수
  likeCount: number; //좋아요 개수
  userName: string; //유저명
  userImage: string; //유저 프로필 이미지
  createAt: string; //작성일
  ootdImages: {
    url: string; //ootd 이미지
    ootdClothesList?: {
      id: number;
      url: string;
      brand: string; //옷 브랜드
      category: {
        id: number;
        smallCategory: string;
        bigCategory: string;
      };
      size: string;
      name: string; //옷 별칭
      coordinate: {
        xrate: string;
        yrate: string;
      };
      deviceSize: {
        deviceWidth: number;
        deviceHeight: number;
      };
    }[];
  }[];
  styles: {
    name: string;
  }[];
  comment?: {
    id: number;
    userName: string;
    userImage: string;
    content: string;
    createAt: string;
    childComment?: {
      id: number;
      userName: string;
      userImage: string;
      content: string;
      createAt: string;
      taggedUserName: string;
    }[];
  }[];
  bookmark: Boolean;
  like: Boolean;
}
