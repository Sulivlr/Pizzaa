// import {createAsyncThunk} from '@reduxjs/toolkit';
// import axiosApi from '../axiosApi';
// import {ApiOrders, Order} from '../types';
//
// export const fetchOrders = createAsyncThunk<Order[]>(
//   'orders/fetchOrders',
//   async () => {
//     const {data: apiOrders} = await axiosApi.get<ApiOrders | null>('/orders.json');
//
//     if (!apiOrders) {
//       return [];
//     }
//
//
//   });