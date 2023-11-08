export interface ItemsStore {
  getAllItems: () => ItemsFeed[];
  setItems: (items: ItemsFeed[]) => void;
  makeRead: (id: number) => void;
  hasItems: boolean;
}
export interface Items {
  id: number;
  title: string;
  thumnail: string;
  href: string;
  siteName: string;
  info: {
    discountRate: string | number;
    discountedPrice: string | number;
    originalPrice: string | number;
  };
  endDate: string;
}

export interface ItemsFeed extends Items {
  read?: boolean;
}
