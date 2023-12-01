export interface IPostCard {
  name: string;
  userName: string;
  timeStamp: Date;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface IProfilePostCard extends IPostCard {
  isResolved: boolean;
}
