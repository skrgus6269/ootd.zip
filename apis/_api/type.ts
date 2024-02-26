export interface postOOTDPayload {
  content: string;
  isPrivate: Boolean;
  styles: number[];
  ootdImages: {
    ootdImage: string;
    clothTags?: {
      clothesId: number;
      deviceWidth?: number;
      deviceHeight?: number;
      xrate: string;
      yrate: string;
    }[];
  }[];
}

export interface patchOOTDIsPrivatePayload {
  isPrivate: Boolean;
  id: number;
}

export interface postClothPayload {
  purchaseStore: string;
  brandId: number;
  categoryId: number;
  colorIds: number[];
  isOpen: Boolean;
  sizeId: number;
  clothesImageUrl: string;
  name: string;
  memo?: string;
  purchaseDate?: string;
}

export interface getUserBookmarkListPayload {
  page: number;
  size: number;
  sortCriteria: string;
  sortDirection: string;
}

export interface postOOTDComentPayload {
  ootdId: number;
  parentDepth: number;
  content: string;
  taggedUserName?: string;
  commentParentId?: number;
}
