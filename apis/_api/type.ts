export interface AddOOTDPayload {
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

export interface GetOOTDParams {
  id: number;
}
export interface FixOOTDPayload extends AddOOTDPayload {}

export interface DeleteOOTDPayload {
  id: number;
}

export interface FixOOTDContentsOrIsPrivatePayload {
  content: string;
  isPrivate: Boolean;
}

export interface AddOOTDBookmarkPayload {
  id: number;
}

export interface DeleteOOTDBookmarkPayload {
  id: number;
}

export interface AddOOTDLikePayload {
  id: number;
}

export interface DeleteOOTDLikePayload {
  id: number;
}
