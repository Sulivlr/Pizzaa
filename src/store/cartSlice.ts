import {CartDish, Dish} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartState {
  cartDishes: CartDish[]
}

const initialState: CartState = {
  cartDishes: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      const index = state.cartDishes.findIndex(cartDish => cartDish.dish.id === dish.id);

      if (index !== -1) {
        state.cartDishes[index].amount++;
      } else {
        state.cartDishes.push({
          dish,
          amount: 1
        });
      }
    },
    decrementDish: (state, {payload: id}: PayloadAction<string>) => {
      const index = state.cartDishes.findIndex(cartDish => cartDish.dish.id === id);

      if (index !== -1) {
        if (state.cartDishes[index].amount > 1) {
          state.cartDishes[index].amount--;
        } else {
          state.cartDishes.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cartDishes = [];
    }
  },
  selectors: {
    selectCartDishes: (state) => state.cartDishes,
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  addDish,
  clearCart,
  decrementDish,
} = cartSlice.actions;
export const
  {selectCartDishes,
} = cartSlice.selectors;