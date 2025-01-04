import {Category} from "./category";

export interface Supplement {
  id: number;
  name: string;
  category: Category;
  description: string;
  imageUrl: string;
}