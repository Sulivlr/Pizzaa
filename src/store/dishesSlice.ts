import {createSlice} from '@reduxjs/toolkit';
import {createDish, deleteDish, fetchDishes} from './dishesThunks';
import {Dish} from '../types';

export interface DishesState {
  items: Dish[];
  isCreating: boolean;
  isFetching: boolean;
  isRemoving: string | null;
}

export const initialState: DishesState = {
  items: [],
  isCreating: false,
  isFetching: false,
  isRemoving: null,
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

    builder.addCase(deleteDish.pending, (state, {meta: {arg: id}}) => {
      state.isRemoving = id;
    }).addCase(deleteDish.fulfilled, (state) => {
      state.isRemoving = null;
    }).addCase(deleteDish.rejected, (state) => {
      state.isRemoving = null;
    });
  },
  selectors: {
    selectDishIsCreating: (state) => state.isCreating,
    selectDishIsFetching: (state) => state.isFetching,
    selectDishes: (state) => state.items,
    selectDishIsRemoving: (state) => state.isRemoving,
  },
});

export const dishesReducer = dishesSlice.reducer;

export const {
  selectDishIsCreating,
  selectDishIsFetching,
  selectDishes,
  selectDishIsRemoving,
} = dishesSlice.selectors;