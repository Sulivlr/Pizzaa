import {createAsyncThunk} from '@reduxjs/toolkit';
import {DishMutation} from '../types';
import axiosApi from '../axiosApi';

export const createDish = createAsyncThunk<void, DishMutation>(
  'dishes/create',
  async (apiDish) => {
    await axiosApi.post('/dishes.json', apiDish);
  });