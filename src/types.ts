export interface ApiDish {
  name: string;
  price: number;
  image: string;
}


export interface Dish extends ApiDish {
  id: string;
}

export interface ApiDishes {
  [id: string] : ApiDish;
}

export interface UpdateDish {
  id: string;
  apiDish: ApiDish;
}

export interface DishMutation {
  name: string;
  price: string;
  image: string;
}



