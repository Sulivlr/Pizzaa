import {createSlice} from '@reduxjs/toolkit';
import {createDish} from './dishesThunks';

export interface DishesState {
  isCreating: boolean;
}

export const initialState: DishesState = {
  isCreating: false,
}

export const dishesSlice = createSlice({
  name: "dishes",
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
  },
  selectors: {
    selectDishIsCreating: (state) => state.isCreating,
  },
});

export const dishesReducer = dishesSlice.reducer;

export const {selectDishIsCreating,
} = dishesSlice.selectors;