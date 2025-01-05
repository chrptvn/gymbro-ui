import {Category} from "./category";

export interface Element {
  id: number;
  name: string;
  category: Category;
  description: string;
  imageUrl: string;
}