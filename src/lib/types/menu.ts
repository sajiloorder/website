export type DummyMenuItemType = {
  id: number;
  name: string;
  description: string;
  category: number | string;
  price: number;
  image_url: string;
  is_available: boolean;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
};
export type ItemType = {
  id: string;
  categories: string[];
  menu: string;
  name: string;
  description: string;
  price: string;
  is_active: boolean;
  // options: ItemOptionType[]; // Uncomment if options are needed
};
export type ItemOptionType = {
  id: string;
  name: string;
  description: string;
  additional_price: string;
  is_active: boolean;
  item: string;
};
