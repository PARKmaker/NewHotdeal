interface Items {
  title: string;
  thumnail: string;
  info: {
    discountRate: string | number;
    discountedPrice: string | number;
    originalPrice: string | number;
  };
  endDate: string;
}

interface ItemsStore {}
