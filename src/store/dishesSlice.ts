import {createSlice} from '@reduxjs/toolkit';
import {createDish, fetchDishes} from './dishesThunks';
import {Dish} from '../types';

export interface DishesState {
  items: Dish[];
  isCreating: boolean;
  isFetching: boolean;
}

export const initialState: DishesState = {
  items: [],
  isCreating: false,
  isFetching: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDish.pending, (state) => {
      state.isCreating = true;
    }).addCase(createDish.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createDish.rejected, (state) => {
      state.isCreating = false;
    });

    builder.addCase(fetchDishes.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchDishes.fulfilled, (state, {payload: dishes}) => {
      state.isFetching = false;
      state.items = dishes;
    }).addCase(fetchDishes.rejected, (state) => {
      state.isFetching = false;
    });
  },
  selectors: {
    selectDishIsCreating: (state) => state.isCreating,
    selectDishIsFetching: (state) => state.isFetching,
    selectDishes: (state) => state.items,
  },
});

export const dishesReducer = dishesSlice.reducer;

export const {
  selectDishIsCreating,
  selectDishIsFetching,
  selectDishes,
} = dishesSlice.selectors;