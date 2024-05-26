/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  // Name
  name: 'genreOrCategory',
  // State
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  // Actions used in dispatch function.
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // Saving the payload in the 'genreIdOrCategoryName' state
      state.genreIdOrCategoryName = action.payload;
      // Reset search query state after changing category or genre
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
