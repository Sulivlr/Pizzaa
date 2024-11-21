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


export interface DishMutation {
  name: string;
  price: string;
  image: string;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}


export interface ApiOrderDishes {
  [dishId: string] : number
}

export interface ApiOrder {
  dishes: ApiOrderDishes;
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}

export interface OrderDishInfo {
  amount: number;
  title: string;
  price: number;
}

export interface Order {
  id: string;
  totalPrice: number;
  dishes: OrderDishInfo[];
}
