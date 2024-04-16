export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  // "categoryId": "661e2296d31bf4b515c0f0f4",
  // "conditionId": "661e2241d31bf4b515c0f0ed",
  bids: number;
  descrition: string;
  category: Category;
  condition: Condition;
};

export type Category = {
  id: string;
  name: string;
};
export type Condition = {
  id: string;
  name: string;
};
