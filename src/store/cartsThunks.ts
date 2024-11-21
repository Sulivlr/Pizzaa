import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {ApiOrder} from '../types';

export const sendCartDish = createAsyncThunk<void, ApiOrder[]>(
  'cart/sendCartDish',
  async (apiDish) => {
    await axiosApi.post(`/orders.json`, apiDish);
  });