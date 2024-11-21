import {Order} from '../types';
import {createSlice} from '@reduxjs/toolkit';

export interface OrdersState {
  items: Order[];
  isFetching: boolean;
}

export const initialState: OrdersState = {
  items: [],
  isFetching: false,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {
    selectOrders: (state) => state.items,
    selectOrdersFetching: (state) => state.isFetching,
  }
});

export const ordersReducer = ordersSlice.reducer;
export const {
  selectOrders,
  selectOrdersFetching
} = ordersSlice.selectors;