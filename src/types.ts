export interface Dish {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface DishMutation {
  name: string;
  price: string;
  image: string;
}


export interface ApiDishes {
  [id: string] : Dish;
}


