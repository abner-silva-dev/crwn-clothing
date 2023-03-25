import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const getCurretUser = user => async dispatch => {
  dispatch(setCurrentUser(user));
};

export const { setCurrentUser } = userSlice.actions;
export const selectCount = state => state.currentUser;

export default userSlice.reducer;
