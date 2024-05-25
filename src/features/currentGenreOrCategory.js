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
  reducers: {
    // Action used in dispatch function.
    selectGenreOrCategory: (state, action) => {
      // Saving the payload in the 'genreIdOrCategoryName' state
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
