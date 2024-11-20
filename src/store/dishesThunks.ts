import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiDishes, Dish, DishMutation} from '../types';
import axiosApi from '../axiosApi';

export const createDish = createAsyncThunk<void, DishMutation>(
  'dishes/create',
  async (apiDish) => {
    const dishData = {
      ...apiDish,
      price: parseFloat(apiDish.price)
    };
    await axiosApi.post('/dishes.json', dishData);
  });

export const fetchDishes = createAsyncThunk<Dish[]>(
  'dishes/fetch',
  async () => {
    const {data: dishes} = await axiosApi.get<ApiDishes | null>('/dishes.json');
    if (dishes === null) {
      return [];
    }

    return Object.keys(dishes).map((id) => ({
      ...dishes[id],
      id
    }));
  });

export const deleteDish = createAsyncThunk<void, string>(
  'dishes/remove',
  async (id) => {
    await axiosApi.delete(`/dishes/${id}.json`);
  });
