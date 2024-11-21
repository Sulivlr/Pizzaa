import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {CartDish} from '../types';

export const sendCartDish = createAsyncThunk<void, CartDish[]>(
  'cart/sendCartDish',
  async (apiDish) => {
    await axiosApi.post(`/orders.json`, apiDish);
  });